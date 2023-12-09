import { ScrollSpy, ScrollSpyOptions } from 'bootstrap.native';

/**
 * Gets a ScrollSpy instance if it exists, or create a new instance.
 * @param element
 * @param config
 * @returns
 */
ScrollSpy.getOrCreateInstance = (element: HTMLElement, config?: Partial<ScrollSpyOptions>): ScrollSpy => {
  return ScrollSpy.getInstance(element) ?? new ScrollSpy(element, config);
};

export default ScrollSpy;
