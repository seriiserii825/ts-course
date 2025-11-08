import { CartEntry, ParseResult, ProductItem, ServiceItem } from "../types/cart-type-types";

export default function cartType() {
  /* 2) Базовые утилиты-guards */
  function isRecord(v: unknown): v is Record<string, unknown> {
    return typeof v === "object" && v !== null && !Array.isArray(v);
  }

  function isNumber(x: unknown): x is number {
    return typeof x === "number" && Number.isFinite(x);
  }

  function isNonEmptyString(x: unknown): x is string {
    return typeof x === "string" && x.trim().length > 0;
  }

  /* 3) Специализированные guards */
  function isProductItem(o: unknown): o is ProductItem {
    if (!isRecord(o)) return false;
    return (
      o.type === "product" &&
      isNonEmptyString(o.title) &&
      isNonEmptyString(o.title) &&
      isNumber(o.price) &&
      (o.weightKg === undefined || isNumber(o.weightKg))
    );
  }

  function isServiceItem(o: unknown): o is ServiceItem {
    if (!isRecord(o)) return false;
    return (
      o.type == "service" &&
      isNonEmptyString(o.id) &&
      isNonEmptyString(o.name) &&
      isNumber(o.price) &&
      (o.weightKg === undefined || isNumber(o.weightKg))
    );
  }

  /* Главный guard союза */
  function isCartEntry(o: unknown): o is CartEntry {
    // сначала грубая проверка на объект и discriminator
    if (!isRecord(o) || !("type" in o)) return false;
    // затем делегируем спец-guards
    return isProductItem(o) || isServiceItem(o);
  }

  /**
   * Принимает что угодно (unknown), ожидаем массив.
   * Возвращает только валидные элементы, остальное — в warnings.
   */
  function parseCart(input: unknown): ParseResult {
    if (Array.isArray(input)) {
      const result: ParseResult = { entries: [], warnings: [] };
      input.forEach((entry, index) => {
        if (!isCartEntry(entry)) {
          result.warnings.push({
            index,
            reason: "Not cart entry",
            raw: false,
          });
        } else {
          result.entries.push(entry);
        }
      });
      return result;
    }
    return {
      entries: [],
      warnings: [{ index: 0, reason: "not array", raw: false }],
    };
  }

  /* 5) Подсчёт итоговой суммы */
  function calcTotals(entries: CartEntry[]): { subtotal: number; shipping: number; total: number } {
    const base = 2.5;
    const perKg = 1.2;

    let subtotal = 0;
    let shipping = 0;

    for (const e of entries) {
      switch (e.type) {
        case "product":
          subtotal += e.price;
          shipping += base + perKg * (e.weightKg ?? 0);
          break;

        case "service":
          subtotal += e.price;
          break;

        default:
          const _exhaustive: never = e;
          return _exhaustive;
      }
    }

    const total = subtotal + shipping;
    return { subtotal, shipping, total };
  }

  /* 6) Пример данных для проверки (можешь править) */
  const raw: CartEntry[] = [
    { type: "product", id: "p1", title: "Стальная ёмкость", price: 300, weightKg: 12.3 },
    { type: "service", id: "s1", name: "Монтаж", price: 120, durationMin: 180 },
    { type: "product", id: "bad", title: "", price: 99 },
    { type: "service", id: "s2", name: "Пуско-наладка", price: 200 },
  ];

  const { entries, warnings } = parseCart(raw);
  console.log("valid entries:", entries);
  console.log("warnings:", warnings);
  console.log("totals:", calcTotals(entries));
}
