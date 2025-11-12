export default function practice582() {
// 🧩 Mapped Types
// 1. Сделай все поля числовыми
// ts
// Copy code
// // Есть тип:
type Sizes = {
  width: string;
  height: string;
  depth: string;
};
type NumberSize = {
  [K in keyof Sizes]: number 
}
// 3. Добавь префикс ко всем ключам
// ts
type Settings = {
  theme: string;
  language: string;
};

type PrefixedSettings = {
  // [K in keyof Settings]: Settings[K]
  [K in keyof Settings as `app_${string & K}`]: Settings[K]
}

// // Создай тип PrefixedSettings с ключами вида "app_theme", "app_language"
// 4. Удали определённые ключи
// ts
type Book = {
  title: string;
  author: string;
  year: number;
};

type BookWithoutYear = {
  [K in keyof Book as K extends "year" ? never : K]: Book[K]
}
// // Создай тип BookWithoutYear, где нет поля year
// 5. Измени все свойства на функции
// ts
// Copy code
// // Есть тип:
type Shape = {
  width: number;
  height: number;
};

type ShapeGetters = {
  [K in keyof Shape]: () => Shape[K]
}
//
// // Создай тип ShapeGetters, где каждое свойство — функция, возвращающая значение
// // например { width: () => number, height: () => number }
// ⚖️ Conditional Types
// 6. Проверка на массив
// ts
// Copy code
// // Создай тип IsArray<T>, который возвращает true, если T — массив, иначе false.
type IsArray<T> = T extends any[] ? true : false;
type A = IsArray<string[]>; // true
type B = IsArray<number>;   // false
// 7. Возвращай только массив
// ts
// Copy code
// // Создай тип ExtractArray<T>, который возвращает сам тип, если это массив,
// // иначе возвращает never.
type ExtractArray<T> = T extends any[] ? T : never;
type A1 = ExtractArray<number[]>; // number[]
type B1 = ExtractArray<string>;   // never
// 8. Преобразуй тип в массив
// ts
// Copy code
// // Создай тип ToArray<T>, который делает из T массив,
// // если это не массив, иначе оставляет как есть.
type ToArray<T> = T extends any[] ? T : T[];
type A2 = ToArray<string>;   // string[]
type B2 = ToArray<number[]>; // number[]
// 9. Проверка на null
// ts
// Copy code
// // Создай тип IsNullable<T>, который возвращает true, если T включает null.
type IsNullable<T> = null extends T ? true : false;
type A3 = IsNullable<string | null>; // true
type B3 = IsNullable<number>;        // false
