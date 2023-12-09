import { Modal, ModalOptions } from 'bootstrap.native';

/**
 * Gets a Modal instance if it exists, or create a new instance of Modal.
 *
 */
Modal.getOrCreateInstance = (element: HTMLElement, config?: Partial<ModalOptions>): Modal => {
  return Modal.getInstance(element) ?? new Modal(element, config);
};

export default Modal;
