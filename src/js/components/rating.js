import { isDisabled } from 'bootstrap/js/src/util/index';
import BaseComponent from 'bootstrap/js/src/base-component';
import EventHandler from 'bootstrap/js/src/dom/event-handler';
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine';

const NAME = 'rating';

const DATA_KEY = 'fbs.rating';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';

const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY}`;
const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY}`;
const EVENT_CLICK = `click${EVENT_KEY}`;
const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`;

const EVENT_CHANGEACTIVE = `changeActive${EVENT_KEY}`;
const EVENT_CHANGE = `change${EVENT_KEY}`;

const SELECTOR_ACTIVE = '.active';
const SELECTOR_ITEM = '.rating-item';
const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
const SELECTOR_DATA_TOGGLE = '[data-fbs-toggle="rating"]';

const Default = {
  readonly: false,
};

const DefaultType = {
  readonly: 'boolean',
};

class Rating extends BaseComponent {
  constructor(element, config) {
    super(element, config);

    this._activeItems = this._getActiveItems();
    this._items = SelectorEngine.find(SELECTOR_ITEM, this._element);
    this._addEventListeners();
  }

  static get NAME() {
    return NAME;
  }

  static get Default() {
    return Default;
  }

  static get DefaultType() {
    return DefaultType;
  }

  _addEventListeners() {
    this._items.forEach((element) => {
      EventHandler.on(element, EVENT_MOUSEENTER, (event) => this._changeActive(event));
    });
    this._items.forEach((element) => {
      EventHandler.on(element, EVENT_CLICK, (event) => this._change(event));
    });
    EventHandler.on(this._element, EVENT_MOUSELEAVE, () => this._leave());
  }

  _getActiveItems() {
    return SelectorEngine.find(SELECTOR_ACTIVE_ITEM, this._element);
  }

  _change(event) {
    if (isDisabled(this._element) || this._config.readonly) {
      return;
    }
    const activeElement = event.target.closest(SELECTOR_ITEM);
    const activeIndex = this._items.indexOf(activeElement);
    this._items.forEach((element, n) => {
      if (n <= activeIndex) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
    this._activeItems = this._getActiveItems();
    EventHandler.trigger(this._element, EVENT_CHANGE, {
      element: activeElement,
      index: activeIndex,
    });
  }

  _changeActive(event) {
    if (isDisabled(this._element) || this._config.readonly) {
      return;
    }
    const activeElement = event.target.closest(SELECTOR_ITEM);
    const activeIndex = this._items.indexOf(activeElement);
    this._items.forEach((element, n) => {
      if (n <= activeIndex) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
    EventHandler.trigger(this._element, EVENT_CHANGEACTIVE, {
      element: activeElement,
      index: activeIndex,
    });
  }

  _leave() {
    if (isDisabled(this._element) || this._config.readonly) {
      return;
    }
    this._items.forEach((element) => {
      if (this._activeItems.indexOf(element) == -1) {
        element.classList.remove('active');
      } else {
        element.classList.add('active');
      }
    });
    let activeElement = null;
    let activeIndex = -1;
    if (this._activeItems.length > 0) {
      activeElement = this._activeItems[this._activeItems.length - 1];
      activeIndex = this._activeItems.indexOf(activeElement);
    }
    EventHandler.trigger(this._element, EVENT_CHANGEACTIVE, {
      element: activeElement,
      index: activeIndex,
    });
  }
}

EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
  const elements = SelectorEngine.find(SELECTOR_DATA_TOGGLE);

  for (const element of elements) {
    Rating.getOrCreateInstance(element);
  }
});

export default Rating;
