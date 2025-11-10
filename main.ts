import homeworkMedia from "./modules/34.index";
import neverCase from "./modules/38.never";
import functionOverloading from "./modules/39.peregruzkaFunctii";
import cartType from "./modules/41.cartType";
import drinksFunc from "./modules/41.drinks";
import petRobot from "./modules/41.petRobot";
import weatherCheck from "./modules/41.weatherCheck";

interface ParentsOfUser {
  mother: string;
  father: string;
}

interface User<ParentsData extends ParentsOfUser> {
  login: string;
  age: number;
  parents: ParentsData;
}

const user: User<{ mother: string; father: string; married: true }> = {
  login: "ivan123",
  age: 25,
  parents: {
    mother: "Anna",
    father: "Tom",
    married: true,
  },
};

function depositNumber<T extends number | string>(amount: T): T {
  return amount;
}

console.log(depositNumber(44));
console.log(depositNumber('500'));

// weatherCheck();
// petRobot();
// drinksFunc();
// cartType()
// functionOverloading();
// neverCase();
// homeworkMedia();
