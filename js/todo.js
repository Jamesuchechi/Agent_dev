const form = document.querySelector("#todoForm");
const input = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");

form.addEventListener("submit", event => {
    event.preventDefault();

    const task = input.value.trim();

    if (task === "") {
        return;
    }

    const li = document.createElement("li");

    const text = document.createElement("span");
    text.textContent = task;

    text.addEventListener("click", () => {
        text.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";

    deleteButton.addEventListener("click", () => {
        li.remove();
    });

    li.append(text, deleteButton);

    todoList.appendChild(li);

    input.value = "";
});