export default {};

type Keys = {
  a: string;
  b: number;
  c: boolean;
};

type c = {
  [K in keyof Keys]: true;
};

type a = "a" | "b" | "c";

type n = {
  [K in a]: true;
};

// /===================
type TConfig = {
  url: string;
  protocol: string;
  port: number;
}

type ROnly<T extends object> = {
  readonly [K in keyof T]: T[K];
}

type TOptional<T extends object> = {
  [K in keyof T]?: T[K];
}

type ConfigOptional = TOptional<TConfig>;

let config: ROnly<TConfig> = {
  url: "example.com",
  protocol: "https",
  port: 443
};

config.url = "test.com"; // Error: Cannot assign to 'url' because it is a read-only property.


