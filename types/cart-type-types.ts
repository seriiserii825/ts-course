export type ProductItem = {
  type: "product";
  id: string;
  title: string;
  price: number;
  weightKg?: number;
};
export type ServiceItem = {
  type: "service";
  id: string;
  name: string;
  price: number;
  durationMin?: number;
};
export type CartEntry = ProductItem | ServiceItem;
export type TWarningParseResult = {
  index: number;
  reason: string;
  raw: unknown;
};
/* 4) Нормализация сырых данных */
export type ParseResult = {
  entries: CartEntry[];
  warnings: TWarningParseResult[];
};
