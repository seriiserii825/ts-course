export default function practice561() {
  // 🧩 1. keyof
  // Создай интерфейс User с полями name, age, email.
  // Выведи тип UserKeys, который содержит только имена ключей этого интерфейса.
  // Проверь его, создав переменную типа UserKeys.
  interface IUser {
    name: string;
    age: number;
    email: string;
  }
  type UserKeys = keyof IUser;
  const user_keys: UserKeys[] = ["name", "age", "email"];
  console.log("user_keys:", user_keys);

  // Напиши функцию getValue, которая принимает объект User и строку — ключ объекта,
  // и возвращает значение по этому ключу.
  // Используй keyof.
  function getValue(user: IUser, key: keyof IUser): IUser[keyof IUser] {
    return user[key];
  }
  const user: IUser = {
    name: "Alice",
    age: 30,
    email: "alice@gmail.com",
  };
  const user_name = getValue(user, "name");
  console.log("user_name", user_name);
  const user_age = getValue(user, "age");
  console.log("user_age", user_age);

  // 🧩 2. typeof
  // Объяви объект settings = { theme: "dark", version: 3 }.
  // Создай тип SettingsType, используя typeof settings.
  // Затем напиши переменную newSettings, тип которой равен SettingsType.
  type SettingsType = {
    theme: string;
    version: number;
  };
  const settings: SettingsType = { theme: "dark", version: 3 };

  type NewSettings = typeof settings;

  const new_settings: NewSettings = {
    theme: "light",
    version: 4,
  };
  console.log(new_settings);

  // Создай массив colors = ["red", "green", "blue"].
  // Определи тип Color как значение элементов этого массива (подсказка: typeof colors[number]).
  // Попробуй создать переменную с этим типом.

  const colors = ["red", "green", "blue"] as const;
  type Color = (typeof colors)[number];
  const new_color: Color = "red";
  console.log("new_color:", new_color);

  // 🧩 3. Access index types
  // Пусть есть тип:
  // type Car = {
  //   model: string;
  //   engine: {
  //     power: number;
  //     fuel: string;
  //   };
  // };
  // Используй access type, чтобы создать тип EngineType, который описывает свойство engine.
  //
  // Создай тип FuelType, который будет типом свойства fuel внутри engine.
  type Car = {
    model: string;
    engine: {
      power: number;
      fuel: string;
    };
  };
  type EngineType = Car["engine"];
  type FuelType = EngineType["fuel"]
}
