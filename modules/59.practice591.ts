export default function practice591() {
// ✅ Задача 1 — Partial
type User = {
  id: number;
  name: string;
  email: string;
};
// Сделай объект update, который может содержать часть свойств User.
// Используй Partial<User>.
const update: Partial<User> = {
  id: 10
}

// ✅ Задача 2 — Required
type Settings = {
  theme?: string;
  language?: string;
};
// Сделай тип StrictSettings, где все свойства обязательные.
// Используй Required.
type StrictSettings = Required<Settings>
// ✅ Задача 3 — Readonly
// Создай тип продукта:
type Product = {
  id: number;
  title: string;
  price: number;
};
// Сделай тип FrozenProduct, где все свойства только для чтения.
// Используй Readonly.
type FrozenProduct = Readonly<Product>

// ✅ Задача 4 — Pick
// У тебя есть тип:
type Movie = {
  id: number;
  title: string;
  rating: number;
  actors: string[];
};
// Сделай тип:
//
// MoviePreview — содержит только id и title
// Используй Pick.
type MoviePreview = Pick<Movie, 'id' | 'title'>

// ✅ Задача 5 — Omit
// Используя тот же тип Movie, создай тип:
//
// MovieWithoutActors — без поля actors
// Используй Omit.
type MovieWithoutActors = Omit<Movie, 'actors'>
// ✅ Задача 6 — Record
// Есть union:
type Language = "en" | "ru" | "it";
// Создай объект translations, в котором:
//
// ключи — Language
//
// значения — string
//
// Используй Record.
const translations: Record<Language, string>  = {
  "en": "english",
  "ru": "russian",
  "it": "italian"
}
// ✅ Задача 7 — Exclude
// Есть union:
type EventType = "click" | "hover" | "focus" | "scroll";
// Сделай новый тип MouseEvents, где есть только:
// "click" | "hover"
// Используй Exclude.
type MouseEvents = Exclude<EventType, 'click' | 'hover'>
// ✅ Задача 8 — Extract
// Тот же union:
// Сделай тип FocusEvent, который содержит только "focus".
// Используй Extract.
type FocusEvent = Extract<EventType, 'focus'>
// ✅ Задача 9 — ReturnType
// Есть функция:
function makeUser() {
  return { id: 1, name: "Bob" };
}
// Сделай тип UserReturn, который равен возвращаемому типу.
// Используй ReturnType.
type UserReturn = ReturnType<typeof makeUser>

// ✅ Задача 10 — Parameters
// Есть функция:
function sendEmail(to: string, subject: string, body: string) {  }
// Создай тип EmailArgs, который — это кортеж параметров функции.
// Используй Parameters.
type EmailArgs = Parameters<typeof sendEmail>
}
