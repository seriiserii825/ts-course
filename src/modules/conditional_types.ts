export {};

type some = {} extends object ? 1 : 2; // 1

type Extract1<T, U> = T extends U ? T : never;
