import { Tab } from 'bootstrap.native';

/**
 * Gets a Tab instance if it exists or create a new instance.
 */
Tab.getOrCreateInstance = (element: HTMLElement): Tab => {
  return Tab.getInstance(element) ?? new Tab(element);
};

export default Tab;
