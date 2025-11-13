import {CustomSliderOptions, ISlider} from "../types/slider-type";

export default function practice613() {

  function createSlider({
    container = "",
    numberOfSlides = 1,
    speed = 300,
    direction = "horizontal",
    dots = true,
    arrows = true,
    animationName = 'fadeIn'
  }: ISlider = {}): void {
    console.log(container, numberOfSlides, speed, direction, dots, arrows, animationName);
  }

  createSlider();

  // Необходимо типизировать объект настроек, который будет зависим
  // от интерфейса ISlider
  // Все поля в нем обязательны для заполнения

  const customSliderOptions: CustomSliderOptions = {
    container: "id",
    numberOfSlides: 4,
    speed: 1100,
    direction: "horizontal",
    dots: true,
    arrows: true,
  };

  function createCustomSlider(options: CustomSliderOptions): void {
    if ("container" in options) {
      console.log(options);
    }
  }
}
