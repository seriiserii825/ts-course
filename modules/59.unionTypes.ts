export default function unionTypes() {
  type Currencies = {
    usa: "usd";
    china: "cnd";
    russia: "rub";
    moldova: "mdl";
  };
  type MyAnimation = 'fadeIn' | 'fadeOut' 

  type CurrencyWithoutUsa = Omit<Currencies, "usa">; // исключение
  type CurrencyUsaAndRussia = Pick<Currencies, 'usa' | 'russia'> // фильтрация

  type AnimationWithoutFadeOut = Exclude<MyAnimation, 'fadeOut'>; // исключение
}
