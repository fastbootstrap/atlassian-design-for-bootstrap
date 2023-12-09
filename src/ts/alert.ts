import { Alert } from 'bootstrap.native';

/**
 * Gets an Alert instance if it exists, or create a new instance.
 * @param element
 * @returns
 */
Alert.getOrCreateInstance = (element: HTMLElement): Alert => {
  return Alert.getInstance(element) ?? new Alert(element);
};

export default Alert;
