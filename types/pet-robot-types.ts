import { isBoolean, isNonEmptyString, isPositiveNumber, isRecord } from "../helpert/utils";

export type TPetType = "cat" | "dog" | "bird";

export type TPet = {
  type: "pet";
  name: string; // непустая строка
  species: TPetType;
  age: number; // больше 0
};

const species: TPetType[] = ["cat", "dog", "bird"] as const;

export function isValidSpecie(x: unknown): x is TPetType {
  return typeof x === "string" && (species as readonly string[]).includes(x as TPetType);
}

export type TRobot = {
  type: "robot";
  model: string; // непустая строка
  version: number; // положительное число
  autonomous?: boolean; // необязательное булево
};

export type TEntity = TPet | TRobot;

export function isPet(o: unknown): o is TPet {
  if (!isRecord(o)) return false;
  return (
    o.type === "pet" &&
    isNonEmptyString(o.name) &&
    isValidSpecie(o.species) &&
    isPositiveNumber(o.age)
  );
}

export function isRobot(o: unknown): o is TRobot {
  if (!isRecord(o)) return false;
  return (
    o.type === "robot" &&
    isNonEmptyString(o.model) &&
    isPositiveNumber(o.version) &&
    (o.autonomous === undefined || isBoolean(o.autonomous))
  );
}
