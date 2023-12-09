import { Collapse, CollapseOptions } from 'bootstrap.native';

/**
 * Gets a Collapse instance if it exists, or create a new instance of Collapse.
 *
 */
Collapse.getOrCreateInstance = (element: HTMLElement, config?: Partial<CollapseOptions>): Collapse => {
  return Collapse.getInstance(element) ?? new Collapse(element, config);
};

export default Collapse;
