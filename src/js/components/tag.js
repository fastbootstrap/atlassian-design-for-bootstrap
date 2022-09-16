import EventHandler from "bootstrap/js/src/dom/event-handler";
import { enableDismissTrigger } from "bootstrap/js/src/util/component-functions";
import BaseComponent from "bootstrap/js/src/base-component";

const NAME = "tag";

const DATA_KEY = "fbs.tag";
const EVENT_KEY = `.${DATA_KEY}`;

const EVENT_CLOSE = `close${EVENT_KEY}`;
const EVENT_CLOSED = `closed${EVENT_KEY}`;

const CLASS_NAME_FADE = "fade";
const CLASS_NAME_SHOW = "show";

class Tag extends BaseComponent {
  static get NAME() {
    return NAME;
  }

  // Public
  close() {
    const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);

    if (closeEvent.defaultPrevented) {
      return;
    }

    this._element.classList.remove(CLASS_NAME_SHOW);

    const isAnimated = this._element.classList.contains(CLASS_NAME_FADE);
    this._queueCallback(
      () => this._destroyElement(),
      this._element,
      isAnimated
    );
  }

  // Private
  _destroyElement() {
    this._element.remove();
    EventHandler.trigger(this._element, EVENT_CLOSED);
    this.dispose();
  }
}

enableDismissTrigger(Tag, "close");

export default Tag;
