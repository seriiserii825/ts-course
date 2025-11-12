export default function practice562() {
  // 🧩 1. keyof
  // Создай интерфейс Book с полями title, author, pages.
  // Объяви тип BookKeys с помощью keyof Book.
  // Создай переменную, которая может содержать только одно из этих ключевых слов.
  interface Book {
    title: string;
    author: string;
    pages: number;
  }
  type Bookkeys = keyof Book;
  const book_key: Bookkeys = "author";

  function printBookField(book: Book, key: Bookkeys): Book[keyof Book] {
    return book[key];
  }
  const book: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
  };
  const book_key_to_print = printBookField(book, "title");
  console.log("book_key_to_print", book_key_to_print);

  // Напиши функцию printBookField(book, key),
  // которая принимает объект книги и ключ, и выводит значение этого поля.
  // Используй keyof для типа ключа.
  //
  // 🧩 2. typeof
  // Создай объект:
  // Определи тип MovieType на основе этого объекта через typeof.
  // Попробуй создать переменную newMovie с тем же типом.
  //
  // Есть переменная:
  //
  // ts
  // Copy code
  // let product = {
  //   id: 1,
  //   name: "Phone",
  //   price: 599,
  // };
  // Создай тип ProductType через typeof product,
  // а затем функцию updateProduct(p: ProductType): void,
  // которая принимает объект того же типа.
  type MovieType = {
    name: string;
    duration: number;
    genre: string;
  };
  const movie: MovieType = {
    name: "Inception",
    duration: 148,
    genre: "sci-fi",
  };
  type NewMovie = typeof movie;
  const new_movie: NewMovie = {
    name: "The Matrix",
    duration: 136,
    genre: "sci-fi",
  };
  console.log(new_movie, "new_movie");

  // 🧩 3. Access index types
  // Пусть есть тип:
  //
  // ts
  // Copy code
  // type Computer = {
  //   cpu: string;
  //   specs: {
  //     ram: number;
  //     ssd: number;
  //   };
  // };
  // Создай тип SpecsType, который равен типу Computer["specs"].
  // Затем создай переменную mySpecs этого типа.
  //
  // Используя предыдущий тип SpecsType,
  // создай тип RamType, который равен типу Computer["specs"]["ram"].

  type Computer = {
    cpu: string;
    specs: {
      ram: number;
      ssd: number;
    };
  };
  type SpecType = Computer["specs"];
  const new_spec: SpecType = {
    ram: 44,
    ssd: 256,
  };
  console.log(new_spec, "new_spec");
  type RamType = Computer["specs"]['ram']
  const ram_type: RamType = 222
  console.log("ram_type:", ram_type);
}
