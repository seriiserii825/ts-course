import { ValidationData } from "../types/form-type";

export default function practice615() {
  // ✅ Задача 1 — keyof + Indexed Access
  // У тебя есть объект:

  const product = {
    title: "Laptop",
    price: 1200,
    inStock: true,
  };
  // Задача:
  // Создай тип ProductKeys и тип PriceType, используя keyof и индексный доступ.
  type ProductKeys = typeof product;
  type PriceType = ProductKeys["price"];
  // ✅ Задача 2 — typeof + расширяемый объект
  const user = {
    id: 5,
    name: "Mario",
    isAdmin: false,
  };
  // Задача:
  // Создай тип UserOptional, где все поля из user становятся необязательными.
  type UserOptional = Partial<typeof user>;
  // ✅ Задача 3 — Mapped Type простой
  // У тебя есть интерфейс:
  interface Car {
    model: string;
    year: number;
    color: string;
  }
  // Задача:
  // Создай тип, который делает все свойства Car readonly.
  type ReadonlyCar = Readonly<Car>;
  // ✅ Задача 4 — Conditional Type
  // Есть тип:
  // Задача:
  // Сделай conditional type, который:
  //
  // если передан массив → вернуть этот массив как есть
  //
  // если передано одиночное значение → завернуть в массив
  //
  // Пример:
  //
  type ToArray<T> = T extends any[] ? T : T[];
  // ToArray<number> → number[]
  //
  // ToArray<number[]> → number[]
  //
  // ✅ Задача 5 — keyof + Conditional
  // Есть тип:
  interface RequestData {
    method: "GET" | "POST";
    endpoint: string;
    payload?: unknown;
  }
  // Задача:
  // Создай тип RequiredIfPost<T>, который:
  //
  // если method: "POST" — делает payload обязательным
  //
  // если method: "GET" — запрещает наличие payload
  type RequiredIfPost<T> = T extends { method: "POST" }
    ? T & { payload: unknown }
    : T extends { method: "GET" }
      ? Omit<T, "payload">
      : T;
  // ✅ Задача 6 — typeof + keyof (динамический словарь)
  const roles = {
    admin: ["read", "write", "delete"],
    user: ["read"],
    guest: [],
  };
  // Задача:
  // Создай тип RoleName, который принимает ключи объекта roles.
  //
  // Создай тип RolePermissions, который принимает элементы массива ролей ("read" | "write" | "delete").
  type RoleName = keyof typeof roles;
  type RolePermissions = (typeof roles)[RoleName][number];
  // ✅ Задача 7 — Mapped Type: Deep Optional
  // Есть тип:
  interface Profile {
    name: string;
    age: number;
    address: {
      city: string;
      street: string;
    };
  }
  // Задача:
  // Сделай mapped type DeepOptional<T>, где каждое свойство любого уровня становится optional.
  type DeepOptional<T> = {
    [K in keyof T]?: T[K] extends object ? DeepOptional<T[K]> : T[K];
  };
  // ✅ Задача 8 — Conditional: Extract / Exclude практика
  // Есть тип:
  type Events = "click" | "focus" | "blur" | "scroll";
  // Задача:
  //
  // создай тип InteractiveEvents, содержащий только "click" | "focus"
  // создай тип PassiveEvents, содержащий "blur" | "scroll"
  type InteractiveEvents = Extract<Events, "click" | "focus">;
  type PassiveEvents = Exclude<Events, InteractiveEvents>;
  // ✅ Задача 9 — keyof + typeof + Record
  // Есть массив:
  const sizes = ["S", "M", "L", "XL"] as const;
  // Задача:
  // Создай тип SizeRecord, который будет:
  //
  // ts
  // Copy code
  // {
  //   S: number;
  //   M: number;
  //   L: number;
  //   XL: number;
  // }
  type SizeRecord = Record<(typeof sizes)[number], number>;
  // ✅ Задача 10 — Типизация конфигов
  // interface SliderConfig {
  //   slides: number;
  //   autoPlay: boolean;
  //   direction: "left" | "right";
  // }
  // Задача:
  // Создай тип SliderConfigValidation, где каждому полю соответствует:
  //
  // ts
  // Copy code
  // {
  //   value: тип_оригинального_поля;
  //   isValid: boolean;
  // }
  // Пример:
  //
  // ts
  // Copy code
  // {
  //   slides: { value: number; isValid: boolean };
  //   autoPlay: { value: boolean; isValid: boolean };
  //   direction: { value: "left" | "right"; isValid: boolean };
  // }
}
