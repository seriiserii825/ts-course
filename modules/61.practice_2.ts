export default function practice612() {
  // 1. Опиши базовый тип доклада
  //   - обязательные поля: title, speaker, startsAt, durationMinutes, level
  //   - level: "beginner" | "intermediate" | "advanced"
  type Talk = {
    title: string;
    speaker: string;
    startsAt: string;
    durationMinutes: number;
    level: "beginner" | "intermediate" | "advanced";
  };

  // 2. На основе Talk опиши ScheduledTalk с помощью mapped type + conditional + `as` + Required
  //   - ключ "startsAt" должен превратиться в "scheduledFor"
  //   - все поля обязательные
  type ScheduledTalk = Required<{
    [K in keyof Talk as K extends "startsAt" ? "scheduledFor" : K]: Talk[K];
  }>;

  // 3. Опиши базовый тип текущего участника конференции
  //   - обязательные поля: name, email, country, ticketType, hasPaid
  //   - ticketType: "standard" | "vip" | "student"
  //   - hasPaid: boolean
  type CurrentAttendee = {
    name: string;
    email: string;
    country: string;
    ticketType: "standard" | "vip" | "student";
    hasPaid: boolean;
  };

  // 4. PastAttendee:
  //   - на основе CurrentAttendee
  //   - УБРАТЬ поле ticketType
  //   - ДОБАВИТЬ поле attendedDays: number
  type PastAttendee = Omit<CurrentAttendee, "ticketType"> & { attendedDays: number };

  // 5. PotentialAttendee:
  //   - взять только name и email из CurrentAttendee
  //   - добавить поле contactAt: Date
  type PotentialAttendee = Pick<CurrentAttendee, "name" | "email">;

  // 6. OnlineConference:
  //   - все поля обязательные (используй Required для всего объекта)
  //   - поля:
  //     name: string
  //     year: number
  //     talks: Talk[]
  //     scheduledTalks: ScheduledTalk[]
  //     currentAttendees: CurrentAttendee[]
  //     pastAttendees: PastAttendee[]
  //     potentialAttendees: PotentialAttendee[]
  type OnlineConference = Required<{
    name: string;
    year: number;
    talks: Talk[];
    scheduledTalks: ScheduledTalk[];
    currentAttendees: CurrentAttendee[];
    pastAttendees: PastAttendee[];
    potentialAttendees: PotentialAttendee[];
  }>;

  //////////////////// ПРИМЕР ДАННЫХ ДЛЯ ПРОВЕРКИ ////////////////////

  const jsNationConf: OnlineConference = {
    name: "JS Nation Online",
    year: 2025,
    talks: [
      {
        title: "TypeScript for React Developers",
        speaker: "Sarah Connor",
        startsAt: "2025-06-10T10:00:00Z",
        durationMinutes: 45,
        level: "intermediate",
      },
      {
        title: "Advanced Mapped Types",
        speaker: "John Matrix",
        startsAt: "2025-06-10T12:00:00Z",
        durationMinutes: 60,
        level: "advanced",
      },
    ],
    scheduledTalks: [
      {
        title: "TypeScript for React Developers",
        speaker: "Sarah Connor",
        scheduledFor: "2025-06-10T10:00:00Z",
        durationMinutes: 45,
        level: "intermediate",
      },
      {
        title: "Advanced Mapped Types",
        speaker: "John Matrix",
        scheduledFor: "2025-06-10T12:00:00Z",
        durationMinutes: 60,
        level: "advanced",
      },
    ],
    currentAttendees: [
      {
        name: "Alice",
        email: "alice@example.com",
        country: "Germany",
        ticketType: "vip",
        hasPaid: true,
      },
      {
        name: "Bob",
        email: "bob@example.com",
        country: "USA",
        ticketType: "student",
        hasPaid: true,
      },
    ],
    pastAttendees: [
      {
        name: "Ivan",
        email: "ivan@example.com",
        country: "Poland",
        hasPaid: true,
        attendedDays: 3,
      },
    ],
    potentialAttendees: [
      {
        name: "Maria",
        email: "maria@example.com",
        contactAt: new Date("2025-05-01"),
      },
    ],
  };
}
