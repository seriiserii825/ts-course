import { isWeatherData, isWeatherError, TWeatherResponse } from "../types/weather-types";

export default function weatherCheck() {
  function parseWeather(input: unknown): TWeatherResponse[] {
    if (!Array.isArray(input)) return [];
    const result: TWeatherResponse[] = [];
    input.forEach((item) => {
      if (isWeatherData(item) || isWeatherError(item)) {
        result.push(item);
      }
    });
    return result;
  }

  const data: unknown[] = [
    { type: "weather", city: "Rome", temperature: 22, condition: "sunny" },
    { type: "error", message: "City not found: Atlantis" },
    { type: "weather", city: "", temperature: "10", condition: "rain" }, // невалидно
  ];

  const weather_data = parseWeather(data);

  function describeWeather(item: TWeatherResponse): string {
    switch (item.type) {
      case "weather":
        return `В городе ${item.city} сейчас ${item.temperature}°C, ${item.condition}`;
      case "error":
        return `Ошибка: City not found`;
      default:
        const test: never = item;
        return test;
    }
  }
  weather_data.forEach(item => {
      console.log(describeWeather(item));
  })
}
