export default function practice563() {
  // 🧩 1. typeof + array[number]
  // Создай массив:
  //
  // ts
  // Copy code
  // const fruits = ["apple", "banana", "orange"] as const;
  // Определи тип Fruit так, чтобы он мог быть только одним из значений этого массива.
  // Подсказка: typeof fruits[number].
  //
  // Создай массив объектов:
  //
  // ts
  // Copy code
  // const users = [
  //   { id: 1, name: "Tom" },
  //   { id: 2, name: "Anna" },
  // ];
  // Создай тип User на основе typeof users[number],
  // и переменную user1 этого типа.

  const fruits = ["apple", "banana", "orange"] as const;
  type Fruit = (typeof fruits)[number];
  const fruit: Fruit = "banana";
  console.log("fruit:", fruit);

  const users = [
    { id: 1, name: "Tom" },
    { id: 2, name: "Anna" },
  ];
  type User = (typeof users)[number];
  const user1: User = {
    id: 44,
    name: "some",
  };
  console.log(user1, "user1");
  // 🧩 2. keyof + access index types
  // Есть интерфейс:
  //
  // ts
  // Copy code
  // interface Car {
  //   brand: string;
  //   model: string;
  //   specs: {
  //     power: number;
  //     fuel: string;
  //   };
  // }
  // Создай тип CarKeys, который представляет все ключи первого уровня.
  // Затем создай тип SpecKeys, который представляет ключи объекта specs.
  //
  // Напиши функцию logCarField<T, K extends keyof T>(car: T, key: K),
  // которая выводит значение поля по ключу.
  // Проверь её с car.specs.power.

  interface Car {
    brand: string;
    model: string;
    specs: {
      power: number;
      fuel: string;
    };
  }
  type CarKeys = keyof Car;
  type SpecKeys = keyof Car["specs"];
  function logCarField<T, K extends keyof T>(car: T, key: K): T[K] {
    return car[key];
  }
  const car: Car = {
    brand: "Toyota",
    model: "Corolla",
    specs: {
      power: 132,
      fuel: "Gasoline",
    },
  }
  const specs = logCarField(car, "specs")
  const power = specs.power
  type SpecPower = Car['specs']['power']
  const power_2: SpecPower = car.specs.power
  const is_equal = power === power_2
  console.log("is_equal", is_equal);

  // 🧩 3. typeof + keyof + access
  // Создай объект:
  //
  // ts
  // Copy code
  // const settings = {
  //   language: "en",
  //   theme: "dark",
  //   options: {
  //     animations: true,
  //     sound: false,
  //   },
  // };
  // Определи тип SettingsType через typeof settings.
  //
  // Определи тип OptionsType через SettingsType["options"].
  //
  // Создай тип OptionKeys, который равен keyof OptionsType.
}
