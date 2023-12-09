import { Dropdown, DropdownOptions } from 'bootstrap.native';

/**
 * Gets a Dropdown instance if it exists or create a new instance of Collapse.
 */
Dropdown.getOrCreateInstance = (element: HTMLElement, config?: Partial<DropdownOptions>): Dropdown => {
  return Dropdown.getInstance(element) ?? new Dropdown(element, config);
};

export default Dropdown;
