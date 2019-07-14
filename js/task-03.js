class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    //- возвращает массив текущих товаров
    return this.items;
  }

  addItem(item) {
    // - получает новый товар и добавляет его к текущим
    this.items.push(item);
  }

  removeItem(item) {
    //- получет товар и, если он есть, удаляет его из текущих
    if (this.items.includes(item)) {
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор"
]);

const items = storage.getItems();
console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
