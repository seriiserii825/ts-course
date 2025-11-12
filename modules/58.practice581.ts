export default function practice581() {
  // 🧩 Задачи по Mapped Types
  // 1. Сделай все свойства обязательными
  // ts
  // Copy code
  // // Есть тип:
  // type User = {
  //   name?: string;
  //   age?: number;
  // };

  type User = {
    name?: string;
    age?: number;
  };

  type RequiredUser = {
    [K in keyof User]-?: User[K];
  };

  const user: User = {
    name: "some",
  };

  const required_user: RequiredUser = {
    name: "some",
    age: 30,
  };

  // // Создай новый тип `RequiredUser`, где все свойства обязательные
  // // используя mapped type.
  // 2. Сделай все свойства только для чтения
  // ts
  // Copy code
  // // Есть тип:
  type Car = {
    brand: string;
    model: string;
    year: number;
  };
  type ReadOnlyCar = {
    readonly [K in keyof Car]: Car[K];
  };

  const readonly_car: ReadOnlyCar = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
  };

  readonly_car.year = 2021; // Ошибка: нельзя изменять свойства

  // // Создай тип `ReadonlyCar`, где нельзя изменять свойства.
  // 3. Сделай все свойства необязательными
  // ts
  // Copy code
  // // Есть тип:
  type Product = {
    title: string;
    price: number;
    inStock: boolean;
  };

  type PartialProduct = {
    [K in keyof Product]?: Product[K];
  };

  // // Создай тип `PartialProduct`, где все поля необязательные.
  // 4. Измени тип всех свойств
  // ts
  // Copy code
  // // Есть тип:
  type Person = {
    name: string;
    age: number;
  };
  type Stringify<T> = {
    [K in keyof Person]: string;
  };

  // // Создай тип `Stringify<T>`, который превращает все свойства в string.
  // ⚖️ Задачи по Conditional Types
  // 5. Определи тип результата
  // ts
  // Copy code
  // // Напиши условный тип Result<T>,
  // // который возвращает "yes", если T — это string,
  // // и "no", если любой другой тип.
  //
  type Result<T> = T extends string ? "yes" : "no";
  type A = Result<string>; // "yes"
  type B = Result<number>; // "no"

  const a: A = "yes";
  const b: B = "no";

  // 6. Фильтрация типов
  // ts
  // Copy code
  // // Напиши тип `NonString<T>`, который удаляет все типы string из объединения.
  //
  type NonString<T> = T extends string ? never : T;
  type A1 = NonString<string | number | boolean>; // number | boolean
  // 7. Определи возвращаемый тип функции
  // ts
  // Copy code
  // // Напиши тип `ReturnTypeIfFunction<T>`,
  // // который возвращает тип результата функции,
  // // если T — это функция, иначе возвращает T без изменений.
  //
  type ReturnTypeIfFunction<T> = T extends (...args: any[]) => infer R ? R : T;

  type A2 = ReturnTypeIfFunction<() => number>; // number
  type B2 = ReturnTypeIfFunction<string>;       // string
  // 8. Проверка на наличие свойства
  type Animal = { name: string };
  type HasName<T> = T extends { name: any } ? true : false;
}
