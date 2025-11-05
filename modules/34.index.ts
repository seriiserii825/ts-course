export default function homeworkMedia() {
  // Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
  type TypesOfMedia = "video" | "audio";
  // Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM
  type FormatsOfMedia = ".mp4" | ".mov" | ".mkv" | ".flv" | ".webM";
  // Описание интерфейса, в котором:
  // name - строка
  // type - один из перечисления выше
  // format = один из перечисления выше
  // subtitles - необязательное поле типа строка
  // marks - необязательное поле неизвестного типа

  type TMedia = {
    name: string;
    type: TypesOfMedia;
    format: FormatsOfMedia;
    subtitles?: string;
    marks?: string | string[];
  };

  function playMedia(data: TMedia): string {
    let marksLog: string[] | string = "";

    // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
    // Если это строка, то просто поместить её в marksLog
    // Если что-то другое - то marksLog = "Unsupported type of marks"
    // Не допускайте any!
    if (data.marks) {
      if (typeof data.marks === "string") {
        marksLog = data.marks;
      }
      if (Array.isArray(data.marks)) {
        marksLog = data.marks.join(", ");
      }
    }

    console.log(`Media ${data.name}${data.format} is ${data.type}
    Marks: ${marksLog}
    Subtitles: ${data.subtitles ?? "none"}`);
    // помните что это за оператор ??

    return "Media started";
  }

  playMedia({
    name: "WoW",
    format: ".mkv",
    type: "video",
    subtitles: "some",
    marks: ["4:30", "5:40"],
  });
}
