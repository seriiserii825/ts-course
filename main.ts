// 1. Создай тип Toggle = "on" | "off" и функцию switchLight(state), возвращающую противоположное значение.
type Toggle = "on" | "off";
function switchLight(state: Toggle): Toggle {
  return state === "on" ? "off" : "on";
}

// console.log(switchLight('on'), "switchLight('on')");
// console.log(switchLight('off'), "switchLight('off')");

// 2. Определи тип DayOfWeek для дней недели и напиши функцию isWeekend(day), которая возвращает true для выходных.
type DayOfWeek = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
function isWeekend(day: DayOfWeek): boolean {
  return day === "saturday" || day === "sunday";
}
// console.log(isWeekend("tuesday"), "isWeekend('tuesday')");
// console.log(isWeekend("saturday"), "isWeekend('saturday')");
// console.log(isWeekend("sunday"), "isWeekend('sunday')");
// console.log(isWeekend("wednesday"), "isWeekend('wednesday')");

// 3. Создай тип HttpMethod = "GET" | "POST" | "PUT" | "DELETE" и функцию makeRequest(url, method), выводящую сообщение с методом.
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
function makeRequest(method: HttpMethod): string {
  return `Make a request with ${method}`;
}
// console.log(makeRequest("GET"), "makeRequest('GET')");
// console.log(makeRequest("POST"), "makeRequest('POST')");
// console.log(makeRequest("PUT"), "makeRequest('PUT')");
// console.log(makeRequest("DELETE"), "makeRequest('DELETE')");

// 4. Определи тип Status = "idle" | "loading" | "success" | "error" и напиши функцию printStatus(status), выводящую текст в зависимости от состояния.
type Status = "idle" | "loading" | "success" | "error";
function printStatus(status: Status): string {
  switch (status) {
    case "idle":
      return "The process is idle.";
    case "loading":
      return "The process is loading.";
    case "success":
      return "The process was successful.";
    case "error":
      return "An error occurred during the process.";
  }
}
// 5. Создай тип Role = "guest" | "user" | "admin" и функцию canDelete(role), возвращающую true только для admin.
type Role = "guest" | "user" | "admin";
function canDelete(role: Role): boolean {
  return role === "admin" ? true : false;
}
// console.log(canDelete("guest"), "canDelete(guest)");
// console.log(canDelete("user"), "canDelete(user)");
// console.log(canDelete("admin"), "canDelete(admin)");

// 6. Определи тип Size = "XS" | "S" | "M" | "L" | "XL" и напиши функцию getSizeLabel(size), возвращающую расшифровку размера.
type Size = "XS" | "S" | "M" | "L" | "XL";
function getSizeLabel(size: Size): void {
  switch (size) {
    case "XS":
      console.log(size, "size extra small");
      break;
    case "S":
      console.log(size, "size small");
      break;
    case "M":
      console.log(size, "size medium");
      break;
    case "L":
      console.log(size, "size large");
      break;
    case "XL":
      console.log(size, "size extra large");
      break;

    default:
      console.log(size)
      break;
  }
}
// getSizeLabel("XS");
// getSizeLabel("S");

