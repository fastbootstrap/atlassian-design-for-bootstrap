import { Popover, PopoverOptions } from 'bootstrap.native';

/**
 * Gets a Popover instance if it exists or create a new instance if not exists.
 * @param element
 * @param config
 * @returns
 */
Popover.getOrCreateInstance = (element: HTMLElement, config?: Partial<PopoverOptions>): Popover => {
  return Popover.getInstance(element) ?? new Popover(element, config);
};

export default Popover;
