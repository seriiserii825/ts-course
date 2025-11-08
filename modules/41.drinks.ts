import { isBoolean, isNonEmptyString, isPositiveNumber, isRecord } from "../helpert/utils";
import {
  DrinkItem,
  isDrinkSize,
  isMilkType,
  MenuEntry,
  ParseResult,
  PastryItem,
} from "../types/drink-types";

export default function drinksFunc() {
  function isDrinkItem(o: unknown): o is DrinkItem {
    if (!isRecord(o)) return false;
    return (
      o.type === "drink" &&
      isNonEmptyString(o.id) &&
      isNonEmptyString(o.name) &&
      isDrinkSize(o.size) &&
      isPositiveNumber(o.price) &&
      (o.milk === undefined || isMilkType(o.milk))
    );
  }

  function isPastryItem(o: unknown): o is PastryItem {
    if (!isRecord(o)) return false;
    return (
      o.type === "pastry" &&
      isNonEmptyString(o.id) &&
      isNonEmptyString(o.title) &&
      isPositiveNumber(o.price) &&
      (o.glutenFree === undefined || isBoolean(o.glutenFree))
    );
  }

  /* Главный guard союза */
  function isMenuEntry(o: unknown): o is MenuEntry {
    // сначала грубая проверка на объект и discriminator
    if (!isRecord(o) || !("type" in o)) return false;
    return isDrinkItem(o) || isPastryItem(o);
  }

  /* 4) Парсер входа */
  function parseOrder(input: unknown): ParseResult {
    // TODO:
    // - если не массив → вернуть warnings c index:-1
    // - пройтись по элементам: валидные → entries.push, иначе warnings.push({index, reason, raw})
    if (!Array.isArray(input) || input.length === 0)
      return { entries: [], warnings: [{ index: -1, reason: "not array", raw: false }] };

    const result: ParseResult = { entries: [], warnings: [] };

    input.forEach((elem, index) => {
      if (!isMenuEntry(elem)) {
        result.warnings.push({ index, reason: "no valid", raw: elem });
      } else {
        result.entries.push(elem);
      }
    });
    return result;
  }

  function calcBill(entries: MenuEntry[]) {
    const taxDrink = 0.1;
    const taxPastry = 0.08;
    let subtotal = 0;
    let tax = 0;

    for (const e of entries) {
      switch (e.type) {
        case "drink": {
          let base = e.price + (e.milk === "oat" || e.milk === "soy" ? 0.5 : 0);
          subtotal += base;
          tax += base * taxDrink;
          break;
        }
        case "pastry": {
          subtotal += e.price;
          tax += e.price * taxPastry;
          break;
        }
        default: {
          const _exhaustive: never = e; // TODO: сохранить never-проверку
          return _exhaustive;
        }
      }
    }

    const total = subtotal + tax;
    return { subtotal, tax, total };
  }

  /* 6) Мини-пример данных (для отладки) — оставь как unknown[] */
  const raw: unknown = [
    { type: "drink", id: "d1", name: "Cappuccino", size: "M", price: 3.2, milk: "oat" },
    { type: "pastry", id: "p1", title: "Croissant", price: 2.1, glutenFree: false },
    { type: "drink", id: "oops", name: "", size: "S", price: -1 }, // невалидно
  ];

  const { entries, warnings } = parseOrder(raw);
  console.log("entries:", entries);
  console.log("warnings:", warnings);
  console.log("bill:", calcBill(entries));
}
