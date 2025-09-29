import { TClientUser } from "./modules/typeGuards";

class Storage<T extends { id: number }> {
  items: Array<T> = [];

  add(item: T) {
    this.items.push(item);
  }
  remove(item: T) {
    this.items = this.items.filter((i) => i! == item);
  }
  getById(id: number) {
    return this.items.find((item) => item.id == id);
  }
  clean() {
    this.items = [];
  }
}

const usersList = new Storage<TClientUser>();
usersList.add({ id: 8, name: "Serii", type: "client" });
