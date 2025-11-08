import { isPet, isRobot, TEntity } from "../types/pet-robot-types";

export default function petRobot() {
  function parseEntities(input: unknown): TEntity[] {
    if (!Array.isArray(input)) return [];
    const result: TEntity[] = [];
    input.forEach((entity) => {
      if (isPet(entity) || isRobot(entity)) {
        result.push(entity);
      }
    });
    return result;
  }
  function describeEntity(e: TEntity): string {
    let result = "";
    switch (e.type) {
      case "pet":
        result = `Питомец ${e.name} (${e.species}), возраст ${e.age} лет`;
        break;

      case "robot":
        result = `Робот ${e.model} v${e.version}, автономный: ${e.autonomous ? "да" : "нет"}`;
        break;

      default:
        const _exhaustive: never = e;
        return _exhaustive;
    }
    return result;
  }
  // 5️⃣ Пример теста
  const data: unknown[] = [
    { type: "pet", name: "Барсик", species: "cat", age: 3 },
    { type: "robot", model: "R2-D2", version: 2, autonomous: true },
    { type: "robot", model: "", version: -1 }, // невалидно
  ];
  const valid = parseEntities(data);
  for (const e of valid) {
    console.log(describeEntity(e));
  }
}
