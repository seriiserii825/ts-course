export type DrinkSize = "S" | "M" | "L";

const validSizes: DrinkSize[] = ["S", "M", "L"];

const milk_types = ["regular", "oat", "soy"];

export function isMilkType(x: unknown): x is "regular" | "oat" | "soy" {
  return typeof x === "string" && milk_types.includes(x);
}

export function isDrinkSize(x: unknown): x is DrinkSize {
  return typeof x === "string" && validSizes.includes(x as DrinkSize);
}

export type DrinkItem = {
  type: "drink";
  id: string;
  name: string;
  size: DrinkSize;
  price: number;
  milk?: "regular" | "oat" | "soy";
};

export type PastryItem = {
  type: "pastry";
  id: string;
  title: string;
  price: number;
  glutenFree?: boolean;
};

export type MenuEntry = DrinkItem | PastryItem;

export type ParseWarning = { index: number; reason: string; raw: unknown };
export type ParseResult = { entries: MenuEntry[]; warnings: ParseWarning[] };
