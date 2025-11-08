export default function weatherCheck(){
// ☁️ Задача: “Погода по городам”
// Сценарий
// Ты получил ответ от простого API прогноза погоды.
// API возвращает массив разных типов данных — иногда это город с текущей погодой, иногда — ошибка запроса (если город не найден).
// Пример ответа:
// json
// Копировать код
// [
//   { "type": "weather", "city": "Rome", "temperature": 22, "condition": "sunny" },
//   { "type": "weather", "city": "Oslo", "temperature": 5, "condition": "snow" },
//   { "type": "error", "message": "City not found: Atlantis" }
// ]
// Что нужно сделать
// 1️⃣ Описать интерфейсы
// WeatherData — успешный ответ
// { type: "weather"; city: string; temperature: number; condition: "sunny" | "rain" | "snow" | "cloudy" }
// WeatherError — ошибка
// { type: "error"; message: string }
// объединяющий тип WeatherResponse = WeatherData | WeatherError
// 2️⃣ Написать type guard’ы
// isWeatherData(o: unknown): o is WeatherData
// isWeatherError(o: unknown): o is WeatherError
// 3️⃣ Функция parseWeather(input: unknown): WeatherResponse[]
// принимает unknown
// если не массив — возвращает пустой список
// фильтрует только валидные элементы (isWeatherData или isWeatherError)
// 4️⃣ Функция describeWeather(item: WeatherResponse): string
// если это weather → вернуть строку вида
// "В городе Rome сейчас 22°C, солнечно."
// если это error →
// "Ошибка: City not found: Atlantis"
// 5️⃣ Тестовые данные
// Сымитируй вызов:
// ts
// Копировать код
// const data: unknown[] = [
//   { type: "weather", city: "Rome", temperature: 22, condition: "sunny" },
//   { type: "error", message: "City not found: Atlantis" },
//   { type: "weather", city: "", temperature: "10", condition: "rain" } // невалидно
// ];
// После фильтрации и описания должен получиться вывод:
// makefile
// Копировать код
// В городе Rome сейчас 22°C, солнечно.
// Ошибка: City not found: Atlantis
// Хочешь — потом дам «уровень 2» этой же темы: добавить тип "forecast" (прогноз на неделю) и сделать вложенный массив дней с температурой, чтобы потренироваться с вложенными guards.
}
