import { Button } from 'bootstrap.native';

/**
 * Gets a Button instance associated to a DOM element if it exists, or create a new instance.
 */
Button.getOrCreateInstance = (element: HTMLElement): Button => {
  return Button.getInstance(element) ?? new Button(element);
};

export default Button;
