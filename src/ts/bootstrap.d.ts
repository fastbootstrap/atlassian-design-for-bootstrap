import { type getOrCreateInstance } from './interface/getOrCreateInstance';

declare module 'bootstrap.native' {
  namespace Alert {
    let getOrCreateInstance: getOrCreateInstance<Alert>;
  }

  namespace Button {
    let getOrCreateInstance: getOrCreateInstance<Button>;
  }

  namespace Carousel {
    let getOrCreateInstance: getOrCreateInstance<Carousel, Partial<CarouselOptions>>;
  }

  namespace Collapse {
    let getOrCreateInstance: getOrCreateInstance<Collapse, Partial<CollapseOptions>>;
  }

  namespace Dropdown {
    let getOrCreateInstance: getOrCreateInstance<Dropdown, Partial<DropdownOptions>>;
  }

  namespace Modal {
    let getOrCreateInstance: getOrCreateInstance<Modal, Partial<ModalOptions>>;
  }

  namespace Offcanvas {
    let getOrCreateInstance: getOrCreateInstance<Offcanvas, Partial<OffcanvasOptions>>;
  }

  namespace Popover {
    let getOrCreateInstance: getOrCreateInstance<Popover, Partial<PopoverOptions>>;
  }

  namespace ScrollSpy {
    let getOrCreateInstance: getOrCreateInstance<ScrollSpy, Partial<ScrollSpyOptions>>;
  }

  namespace Tab {
    export let getOrCreateInstance: getOrCreateInstance<Tab>;
  }

  namespace Toast {
    let getOrCreateInstance: getOrCreateInstance<Toast, Partial<ToastOptions>>;
  }

  namespace Tooltip {
    let getOrCreateInstance: getOrCreateInstance<Tooltip, Partial<TooltipOptions>>;
  }
}
