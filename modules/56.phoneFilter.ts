export default function phoneFilter() {
  interface IPhone {
    company: string;
    number: number;
  }

  // IMobilePhone должен наследоваться от IPhone,
  // тип свойства companyPartner зависит от свойства company

  interface IMobilePhone extends IPhone {
    size: string;
    companyPartner: IPhone["company"];
    manufactured: Date;
  }

  // Типизировать объект phones

  const phones: IMobilePhone[] = [
    {
      company: "Nokia",
      number: 1285637,
      size: "5.5",
      companyPartner: "MobileNokia",
      manufactured: new Date("2021-09-01"),
    },
    {
      company: "Samsung",
      number: 4356637,
      size: "5.0",
      companyPartner: "SamMobile",
      manufactured: new Date("2021-11-05"),
    },
    {
      company: "Apple",
      number: 4552833,
      size: "5.7",
      companyPartner: "no data",
      manufactured: new Date("2022-05-24T12:00:00"),
    },
  ];

  const fakePhones: IMobilePhone[] = [
    {
      company: "FakePhone",
      number: 9999999,
      size: "6.0",
      companyPartner: "no data",
      manufactured: new Date("2023-01-01"),
    },
    {
      company: "AnotherFake",
      number: 8888888,
      size: "6.5",
      companyPartner: "FakePartner",
      manufactured: new Date("2020-12-12"),
    },
    {
      company: "Phony",
      number: 7777777,
      size: "5.8",
      companyPartner: "no data",
      manufactured: new Date("2022-08-15"),
    }
  ];

  interface IPhonesManufacturedAfterDate extends IMobilePhone {
    initialDate: string;
  }

  // Функция должна отфильтровать массив данных и вернуть новый массив
  // с телефонами, выпущенными после даты в третьем аргументе

  function filterPhonesByDate(
    phones: IMobilePhone[],
    key: keyof IMobilePhone,
    initial: string,
  ): IPhonesManufacturedAfterDate[] {
    return phones
      .filter((phone) => phone[key] > new Date(initial))
      .map((phone) => ({
        ...phone,
        initialDate: initial,
      }));
  }

  function filterPhonesByDateGeneric<T extends IMobilePhone>(
    phones: T[],
    key: keyof T,
    initial: string,
  ): Partial<IPhonesManufacturedAfterDate>[] {
    return phones
      .filter((phone) => phone[key] > new Date(initial))
      .map((phone) => ({
        ...phone,
        initialDate: initial,
      }));
  }

  // Второй аргумент при вызове функции должен быть связан с первым,
  // а значит мы получим подсказки - свойства этого объекта

  console.log(filterPhonesByDate(phones, "manufactured", "2022-01-01"));
  console.log(filterPhonesByDateGeneric(fakePhones, "manufactured", "2022-01-01"));
} 
