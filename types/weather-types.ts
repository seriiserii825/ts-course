import { isRecord } from "../helpert/utils";

type TCondition = "sunny" | "rain" | "snow" | "cloudy";

export type TWeatherData = {
  type: "weather";
  city: string;
  temperature: number;
  condition: TCondition;
};

export type TWeatherError = {
  type: "error";
  message: string;
};

export type TWeatherResponse = TWeatherData | TWeatherError;

const conditions: TCondition[] = ["sunny", "rain", "snow", "cloudy"];

function isInConditions(s: string): boolean {
  return conditions.includes(s as TCondition);
}

export function isWeatherData(o: unknown): o is TWeatherData {
  if (!isRecord(o)) return false;
  return (
    o.type === "weather" &&
    typeof o.city === "string" &&
    typeof o.temperature === "number" &&
    typeof o.condition === "string" &&
    isInConditions(o.condition)
  );
}

export function isWeatherError(o: unknown): o is TWeatherError {
  if (!isRecord(o)) return false;
  return o.type === "error" && typeof o.message === "string";
}
