import { isDisabled, getNextActiveElement, getElementFromSelector } from 'bootstrap/js/src/util/index';
import EventHandler from 'bootstrap/js/src/dom/event-handler';
import BaseComponent from 'bootstrap/js/src/base-component';
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine';

const NAME = 'progressTracker';
const DATA_KEY = 'fbs.progressTracker';
const EVENT_KEY = `.${DATA_KEY}`;

const ORDER_NEXT = 'next';
const ORDER_PREV = 'prev';

const CLASS_NAME_ACTIVE = 'active';
const CLASS_NAME_COMPLETED = 'completed';
const CLASS_NAME_FADE = 'fade';
const CLASS_NAME_SHOW = 'show';

const EVENT_CHANGE = `change${EVENT_KEY}`;
const EVENT_CHANGED = `changed${EVENT_KEY}`;

const SELECTOR_ACTIVE = '.active';
const SELECTOR_ITEM = '.progress-tracker-item';
const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;

class ProgressTracker extends BaseComponent {
  constructor(element, config) {
    super(element, config);

    this._activeElement = null;
  }

  static get NAME() {
    return NAME;
  }

  // Public
  next() {
    this._step(ORDER_NEXT);
  }

  reset() {
    const items = this._getItems();
    if (items.length == 0) {
      return;
    }
    items.forEach((item) => {
      this._deactivate(item, false);

      // item.removeAttribute('aria-current', false);
      // item.classList.remove(CLASS_NAME_ACTIVE, CLASS_NAME_COMPLETED);
    });
    this._step(ORDER_PREV, items[0]);
  }

  prev() {
    this._step(ORDER_PREV);
  }

  dispose() {
    super.dispose();
  }

  _step(order, element = null) {
    const activeElement = this._getActive();

    const isNext = order === ORDER_NEXT;
    const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, false);

    if (nextElement === activeElement || isDisabled(nextElement)) {
      return;
    }

    const nextElementIndex = this._getItemIndex(nextElement);

    const eventArgs = {
      selectedIndex: nextElementIndex,
      selectedStep: nextElement,
      previouslySelectedIndex: this._getItemIndex(activeElement),
      previouslySelectedStep: activeElement,
    };

    const triggerChangeEvent = (eventName) => {
      return EventHandler.trigger(this._element, eventName, eventArgs);
    };

    const changeEvent = triggerChangeEvent(EVENT_CHANGE);

    // Paused
    if (changeEvent.defaultPrevented) {
      return;
    }

    this._activeElement = nextElement;

    this._deactivate(activeElement, order == ORDER_NEXT);
    this._activate(nextElement);

    const triggerChangedEvent = (eventName) => {
      return EventHandler.trigger(this._element, eventName, eventArgs);
    };

    triggerChangedEvent(EVENT_CHANGED);
  }

  _activate(element) {
    if (!element) {
      return;
    }

    element.classList.add(CLASS_NAME_ACTIVE);
    element.classList.remove(CLASS_NAME_COMPLETED);
    element.setAttribute('aria-current', true);

    const contentElement = getElementFromSelector(element);
    if (!contentElement) {
      return;
    }
    contentElement.classList.add(CLASS_NAME_ACTIVE);

    const isAnimated = contentElement.classList.contains(CLASS_NAME_FADE);
    const complete = () => {
      if (isAnimated) {
        contentElement.classList.add(CLASS_NAME_SHOW);
      }
    };
    this._queueCallback(complete, element, isAnimated);
  }

  _deactivate(element, isCompleted) {
    if (!element) {
      return;
    }
    element.classList.remove(CLASS_NAME_ACTIVE);
    if (isCompleted) {
      element.classList.add(CLASS_NAME_COMPLETED);
    } else {
      element.classList.remove(CLASS_NAME_COMPLETED);
    }
    element.removeAttribute('aria-current');

    const contentElement = getElementFromSelector(element);
    if (!contentElement) {
      return;
    }
    contentElement.classList.remove(CLASS_NAME_ACTIVE);

    const isAnimated = contentElement.classList.contains(CLASS_NAME_FADE);
    const complete = () => {
      if (isAnimated) {
        contentElement.classList.remove(CLASS_NAME_SHOW);
      }
    };
    this._queueCallback(complete, element, isAnimated);
  }

  _getItemIndex(element) {
    return this._getItems().indexOf(element);
  }

  _getActive() {
    return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
  }

  _getItems() {
    return SelectorEngine.find(SELECTOR_ITEM, this._element);
  }
}

export default ProgressTracker;
