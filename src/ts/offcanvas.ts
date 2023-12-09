import { Offcanvas, OffcanvasOptions } from 'bootstrap.native';

/**
 * Gets a Offcanvas instance if it exists, or create a new instance.
 */
Offcanvas.getOrCreateInstance = (element: HTMLElement, config?: Partial<OffcanvasOptions>): Offcanvas => {
  return Offcanvas.getInstance(element) ?? new Offcanvas(element, config);
};

export default Offcanvas;
