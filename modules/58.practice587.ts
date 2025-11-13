export default function practice587() {
  // 🎯 Задача
  // Создать тип Sanitized<T>, который:
  //
  // превращает все string → string | null
  // (потому что ты, например, очищаешь плохо введённые строки)
  //
  // превращает все File → string
  // (сохраняешь не файл, а URL)
  //
  // делает все свойства обязательными
  //
  // остальные типы оставляет как есть
  type UserForm = {
    name: string | null;
    age: number;
    isAdmin: boolean;
    avatar: File | null;
    notes?: string;
  };

  type Sanitized<T> = {
    [K in keyof T]-?: T[K] extends string
      ? string | null
      : T[K] extends File
      ? string
      : T[K];
  };
}
