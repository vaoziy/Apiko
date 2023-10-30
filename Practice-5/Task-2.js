// Функція для генерації ID
function generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }
  
  // Клас TodoItem
  class TodoItem {
    constructor(name) {
      this.id = generateId();
      this.name = name;
      this.checked = false;
    }
  
    // Гетер для поля checked
    get checked() {
      return this._checked;
    }
  
    // Сеттер для поля checked
    set checked(value) {
      if (value === true || value === false) {
        this._checked = value;
      } else {
        throw new Error("Значення checked має бути true або false");
      }
    }
  }
  
  // Клас TodoList
  class TodoList {
    constructor(name) {
      this.id = generateId();
      this.name = name;
      this.items = [];
    }
  
    // Метод addItem
    addItem(item) {
      if (item instanceof TodoItem) {
        this.items.push(item);
      } else {
        throw new Error("Елемент повинен бути класу TodoItem");
      }
    }
  
    // Метод removeItemById
    removeItemById(id) {
      const index = this.items.findIndex((item) => item.id === id);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    }
  
    // Метод getItemById
    getItemById(id) {
      return this.items.find((item) => item.id === id);
    }
  }
  
  // Приклад використання
  const todoList = new TodoList("Мої справи");
  
  const todoItem1 = new TodoItem("Купити хліб");
  const todoItem2 = new TodoItem("Покласти прання");
  const todoItem3 = new TodoItem("Вирішити задачу");
  const todoItem4 = new TodoItem("Зробити дзвінок");
  
  todoList.addItem(todoItem1);
  todoList.addItem(todoItem2);
  todoList.addItem(todoItem3);
  todoList.addItem(todoItem4);
  
  console.log(todoList); // { id: "_00000000000000000000", name: "Мої справи", items: [ { id: "_00000000000000000001", name: "Купити хліб", checked: false }, { id: "_00000000000000000002", name: "Покласти прання", checked: false }, { id: "_00000000000000000003", name: "Вирішити задачу", checked: false }, { id: "_0
  