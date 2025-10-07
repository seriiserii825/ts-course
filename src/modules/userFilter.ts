export default function typeGuards() {
  type TBaseUser = {
    id: number;
    name: string;
  };
  type TAdminUser = TBaseUser & {
    type: "admin";
    accessLevel: number;
  };

  type TManagerUser = TBaseUser & {
    type: "manager";
    accessLevel: number;
    roles: string[];
  };

  type TClientUser = TBaseUser & {
    type: "client";
  };

  type TUser = TAdminUser | TManagerUser | TClientUser;

  function loadUser(): TUser[] {
    return [
      { type: "manager", id: 1, name: "Alice", accessLevel: 5, roles: ["editor", "viewer"] },
      { type: "admin", id: 2, name: "Mark", accessLevel: 5 },
      { type: "client", id: 3, name: "Toby" },
      { type: "manager", id: 4, name: "Beatrice", accessLevel: 3, roles: ["editor"] },
    ];
  }

  const users = loadUser();

  const clients = users.filter(userFilterSimple("manager")).map((user) => user.roles);

  function userFilterSimple(expected_type: TUser["type"]) {
    return (u: TUser) => u.type === expected_type;
  }

  function userFilter<T extends TUser["type"]>(expected_type: T) {
    return (u: TUser): u is Extract<TUser, { type: T }> => u.type === expected_type;
  }

  // 1) function userFilter<...>(type: T)
  // Объявляем generic-функцию с параметром типа T.
  //
  // Аргумент type — значение (строка "admin" | "manager" | "client"), но его тип — это T (литеральный тип, зависящий от переданной строки).
  //
  // 2) <T extends TUser["type"]>
  // Ограничиваем T, чтобы он был одним из допустимых дискриминаторов:
  // TUser["type"] = "admin" | "manager" | "client".
  //
  // Вызов userFilter("manager") приведёт к выводу T = "manager",
  // userFilter("client") → T = "client", и т. д.
  //
  // 3) return (u: TUser): u is Extract<TUser, { type: T }>
  // Возвращаем функцию-предикат (type guard).
  //
  // Параметр u имеет объединённый тип TUser.
  //
  // Аннотация u is Extract<...> говорит компилятору:
  //
  // «Если функция вернула true, то u — это подтип из TUser, у которого type совпадает с T».
  //
  // Extract<TUser, { type: T }> выбирает только тот вариант из union TUser, у которого type равен T.
  //
  // Если T = "manager" → Extract<...> = TManagerUser
  //
  // Если T = "admin" → Extract<...> = TAdminUser
  //
  // Если T = "client" → Extract<...> = TClientUser
  //
  // 4) => u.type === type
  // Реализация проверки: обычное сравнение строки-дискриминатора.
  //
  // Возвращаемый boolean используется вместе с сигнатурой-предикатом, чтобы сузить тип u в местах вызова.
}
