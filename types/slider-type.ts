export interface ISlider {
  container?: string;
  numberOfSlides?: number;
  speed?: 300 | 500 | 700;
  direction?: "horizontal" | "vertical";
  dots?: boolean;
  arrows?: boolean;
  animationName?: string;
}

export type CustomSliderOptions = Required<
  Omit<ISlider, "animationName" | "speed"> & { speed: number }
>;
