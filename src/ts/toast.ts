import { Toast, ToastOptions } from 'bootstrap.native';

/**
 * Gets a Toast instance if it exists, or create a new instance of Toast.
 */
Toast.getOrCreateInstance = (element: HTMLElement, config?: Partial<ToastOptions>): Toast => {
  return Toast.getInstance(element) ?? new Toast(element, config);
};

export default Toast;
