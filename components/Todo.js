class Todo {
  constructor(data, selector, handleCheck, handleDelete) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
    this._handleCheck = handleCheck;
    this._handleDelete = handleDelete;
  }

  _setEventListeners() {
    this._todoDeleteBtn.addEventListener("click", () => {
      this._handleDelete(this._completed);
      //this._remove();
      if (this._todoCheckboxEl.checked) {
        this._completed = true;
        this._handleCheck(this._completed);
      }
      this._todoElement.remove();
    });
    this._todoCheckboxEl.addEventListener("change", () => {
      this._completed = this._todoCheckboxEl.checked;
      this._handleCheck(this._completed);
      this._data.completed = this._completed;
    });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  _generateDueDate() {
    this.dueDate = new Date(this._data.date);
    this.todoDate = this._todoElement.querySelector(".todo__date");
    if (!isNaN(this.dueDate)) {
      this.todoDate.textContent = `Due: ${this.dueDate.toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        }
      )}`;
    }
    console.log(this._data.date);
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    this._todoDate = this._todoElement.querySelector(".todo__date");
    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
    const todoNameEl = this._todoElement.querySelector(".todo__name");

    todoNameEl.textContent = this._data.name;

    this._generateCheckboxEl();

    this._setEventListeners();

    this._generateDueDate();

    return this._todoElement;
  }
}

export default Todo;
