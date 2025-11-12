export default function mappedTypes() {
  type Keys = "name" | "age" | "location";
  type User = {
    [K in Keys]: string;
  };

  const alex: User = {
    name: "Alex",
    age: "30",
    location: "New York",
  };

  type Languages = {
    ru: "ru";
    en: "en";
    de: "de";
  };

  type MyLanguages = {
    [K in keyof Languages]: string;
  };

  const original_langs: Languages = {
    ru: "ru",
    en: "en",
    de: "de",
  };

  const myLangs: MyLanguages = {
    ru: "Russian",
    en: "English",
    de: "German",
  };
  console.log(original_langs, "original_langs");
  console.log(myLangs, "myLangs");
}
