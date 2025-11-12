export default function practice564() {
// /** =========
//  *  Mini-project: Config & Registry
//  *  Цель: собрать безопасные по типам утилиты для работы с конфигом и реестром сущностей.
//  *  Использовать: keyof, typeof, T[K], typeof arr[number], дженерики с extends keyof.
//  *  Не использовать: mapped types.
//  *  ========= */
//
// /** 1) БАЗОВЫЕ ДАННЫЕ (typeof + as const)
//  * Определи типы на основе констант.
//  */
// export const ENVIRONMENTS = ["dev", "staging", "prod"] as const;
// export const FEATURES = ["search", "auth", "payments"] as const;
//
// type Environment = /* TODO: typeof ENVIRONMENTS[number] */;
// type FeatureName = /* TODO: typeof FEATURES[number] */;
//
// /** 2) КОНФИГ (typeof + индексные типы)
//  * Задан объект конфигурации по окружениям.
//  * Определи типы из него с помощью typeof и доступов по индексу.
//  */
// export const appConfig = {
//   dev: {
//     apiBase: "http://localhost:3000",
//     flags: { search: true, auth: false, payments: false },
//     timeouts: { request: 3000, idle: 10000 },
//   },
//   staging: {
//     apiBase: "https://staging.api.example.com",
//     flags: { search: true, auth: true, payments: false },
//     timeouts: { request: 4000, idle: 12000 },
//   },
//   prod: {
//     apiBase: "https://api.example.com",
//     flags: { search: true, auth: true, payments: true },
//     timeouts: { request: 5000, idle: 15000 },
//   },
// } as const;
//
// type AppConfig = /* TODO: typeof appConfig */;
// type EnvConfig = /* TODO: AppConfig[Environment] */;          // конфиг для одного окружения
// type FlagsType = /* TODO: EnvConfig["flags"] */;               // тип секции flags
// type TimeoutsType = /* TODO: EnvConfig["timeouts"] */;         // тип секции timeouts
// type FlagKeys = /* TODO: keyof FlagsType */;                   // "search" | "auth" | "payments"
//
// /** 3) БЕЗОПАСНЫЕ ГЕТТЕРЫ (keyof + T[K])
//  * Напиши универсальную функцию getProp, которая берёт свойство у объекта.
//  */
// export function getProp<T, K extends keyof T>(obj: T, key: K): /* TODO: T[K] */ {
//   // TODO
// }
//
// /** 4) ВЛОЖЕННЫЙ ГЕТТЕР (двойной индексный доступ)
//  * Напиши getNestedProp, принимающую два ключа (например: "timeouts", "request").
//  */
// export function getNestedProp<
//   T,
//   K1 extends keyof T,
//   K2 extends keyof T[K1]
// >(obj: T, k1: K1, k2: K2): /* TODO: T[K1][K2] */ {
//   // TODO
// }
//
// /** 5) ВАЛИДАЦИЯ КЛЮЧЕЙ ФЛАГОВ (extends keyof)
//  * Функция isFlagKey должна принимать строку и говорить, является ли она ключом FlagsType.
//  * Подсказка: стесни тип входа и верни утверждение-предикат (x is ...).
//  */
// export function isFlagKey(key: string): /* TODO: key is FlagKeys */ {
//   // TODO
// }
//
// /** 6) ПЕРЕКЛЮЧАТЕЛЬ ФЛАГОВ (дженерики + keyof + T[K])
//  * toggleFlag должен принимать EnvConfig, имя флага и инвертировать его значение.
//  * Верни обновлённую копию EnvConfig (иммутабельно).
//  */
// export function toggleFlag<K extends FlagKeys>(
//   envCfg: EnvConfig,
//   flag: K
// ): /* TODO: EnvConfig */ {
//   // TODO
// }
//
// /** 7) ДОСТУП К КОНФИГУ ПО ОКРУЖЕНИЮ (typeof + keyof)
//  * Напиши функцию getEnvConfig, которая принимает окружение и возвращает EnvConfig.
//  */
// export function getEnvConfig(env: Environment): /* TODO: EnvConfig */ {
//   // TODO
// }
//
// /** 8) РЕЕСТР СУЩНОСТЕЙ (массив объектов + typeof arr[number])
//  * Дан список пользователей. Определи тип User через typeof users[number].
//  */
// export const users = [
//   { id: 1, name: "Tom", role: "admin" },
//   { id: 2, name: "Anna", role: "editor" },
//   { id: 3, name: "Leo", role: "viewer" },
// ] as const;
//
// type User = /* TODO: typeof users[number] */;
// type UserKeys = /* TODO: keyof User */;
//
// /** 9) ОБЩИЙ ПОИСК ПО КЛЮЧУ (дженерики + ограничение K extends keyof T)
//  * Напиши findBy, который ищет элемент массива объектов по значению ключа.
//  * Пример: findBy(users, "id", 2) -> { id:2, ... }
//  */
// export function findBy<T, K extends keyof T>(
//   list: readonly T[],
//   key: K,
//   value: /* TODO: T[K] */
// ): /* TODO: T | undefined */ {
//   // TODO
// }
//
// /** 10) СВЯЗЬ КЛЮЧЕЙ И ЗНАЧЕНИЙ (проверка согласованности типов)
//  * Создай функцию ensureFeatureFlag(env: Environment, feature: FeatureName),
//  * которая возвращает булево значение соответствующего флага в конфиге этого env.
//  * Внутри используй getEnvConfig и доступ к ["flags"][feature].
//  */
// export function ensureFeatureFlag(
//   env: Environment,
//   feature: FeatureName
// ): /* TODO: boolean */ {
//   // TODO
// }
//
// /** 11) ТЕСТЫ-КОМПИЛЯТОРЫ (должно компилироваться без ошибок)
//  * Раскомментируй и добейся корректных типов.
//  */
//
// // const e1: Environment = "dev";
// // const f1: FeatureName = "auth";
// // const cfg = getEnvConfig(e1);
// // const api: string = getProp(cfg, "apiBase");
// // const rqTimeout: number = getNestedProp(cfg, "timeouts", "request");
// // const isKey = isFlagKey("payments"); // boolean, но в true ветке — FlagKeys
// // const cfg2 = toggleFlag(cfg, "search");
// // const u: User | undefined = findBy(users, "name", "Anna");
// // const enabled: boolean = ensureFeatureFlag("prod", "search");
}
