import { Tooltip, TooltipOptions } from 'bootstrap.native';

Tooltip.getOrCreateInstance = (element: HTMLElement, config?: Partial<TooltipOptions>): Tooltip => {
  return Tooltip.getInstance(element) ?? new Tooltip(element, config);
};

export default Tooltip;
