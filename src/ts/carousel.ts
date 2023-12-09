import { Carousel, CarouselOptions } from 'bootstrap.native';

/**
 * Gets a Carousel instance if it exists, or create a new instance.
 *
 */
Carousel.getOrCreateInstance = (element: HTMLElement, config?: Partial<CarouselOptions>): Carousel => {
  return Carousel.getInstance(element) ?? new Carousel(element, config);
};

export default Carousel;
