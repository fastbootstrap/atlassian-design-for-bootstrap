import { getElementFromSelector, isDisabled, isVisible } from 'bootstrap/js/src/util/index';
import BaseComponent from 'bootstrap/js/src/base-component';
import EventHandler from 'bootstrap/js/src/dom/event-handler';
import Backdrop from 'bootstrap/js/src/util/backdrop';
import FocusTrap from 'bootstrap/js/src/util/focustrap';

const NAME = 'sidenav';
const DATA_KEY = 'fbs.sidenav';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';
const ESCAPE_KEY = 'Escape';

const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_SHOWING = 'showing';
const CLASS_NAME_HIDING = 'hiding';
const CLASS_NAME_BACKDROP = 'sidenav-backdrop';

const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;

const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY}`;

const SELECTOR_DATA_TOGGLE = '[data-fbs-toggle="sidenav"]';

const Default = {
  backdrop: true,
  scroll: true,
};

const DefaultType = {
  backdrop: '(boolean|string)',
  scroll: 'boolean',
};

class Sidenav extends BaseComponent {
  constructor(element, config) {
    super(element, config);

    this._isShown = false;
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._addEventListeners();
  }

  static get Default() {
    return Default;
  }

  static get DefaultType() {
    return DefaultType;
  }

  static get NAME() {
    return NAME;
  }

  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }

  show(relatedTarget) {
    if (this._isShown) {
      return;
    }

    if (!this._config.scroll) {
      new ScrollBarHelper().hide();
    }

    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW, { relatedTarget });

    if (showEvent.defaultPrevented) {
      return;
    }

    this._isShown = true;
    this._backdrop.show();
    this._element.classList.add(CLASS_NAME_SHOWING);

    const completeCallBack = () => {
      if (!this._config.scroll || this._config.backdrop) {
        this._focustrap.activate();
      }

      this._element.classList.add(CLASS_NAME_SHOW);
      this._element.classList.remove(CLASS_NAME_SHOWING);

      EventHandler.trigger(this._element, EVENT_SHOWN, { relatedTarget });
    };

    this._queueCallback(completeCallBack, this._element, true);
  }

  hide() {
    if (!this._isShown) {
      return;
    }

    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

    if (hideEvent.defaultPrevented) {
      return;
    }

    this._focustrap.deactivate();
    this._element.blur();
    this._isShown = false;
    this._element.classList.add(CLASS_NAME_HIDING);
    this._backdrop.hide();

    const completeCallback = () => {
      if (!this._config.scroll) {
        new ScrollBarHelper().reset();
      }

      this._element.classList.remove(CLASS_NAME_SHOW, CLASS_NAME_HIDING);

      EventHandler.trigger(this._element, EVENT_HIDDEN);
    };

    this._queueCallback(completeCallback, this._element, true);
  }

  dispose() {
    this._backdrop.dispose();
    this._focustrap.deactivate();
    super.dispose();
  }

  _addEventListeners() {
    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
      if (event.key !== ESCAPE_KEY) {
        return;
      }
      this.hide();
    });
  }

  _initializeBackDrop() {
    const clickCallback = () => {
      this.hide();
    };

    const isVisible = Boolean(this._config.backdrop);

    return new Backdrop({
      className: CLASS_NAME_BACKDROP,
      isVisible,
      isAnimated: true,
      rootElement: this._element.parentNode,
      clickCallback: isVisible ? clickCallback : null,
    });
  }

  _initializeFocusTrap() {
    return new FocusTrap({
      trapElement: this._element,
    });
  }
}

EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  const target = getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if (isDisabled(this)) {
    return;
  }

  EventHandler.one(target, EVENT_HIDDEN, () => {
    // focus on trigger when it is closed
    if (isVisible(this)) {
      this.focus();
    }
  });

  const data = Sidenav.getOrCreateInstance(target);
  data.toggle(this);
});

export default Sidenav;
