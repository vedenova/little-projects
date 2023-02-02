"use strict";

const btnAdd = document.querySelector(".add-btn");
const btnDelete = document.querySelector(".delete-btn");
const btnDone = document.querySelector(".done-btn");
const taskInput = document.querySelector(".input").value;
let newTask = document.querySelector(".task-text");
const taskList = [];
const container = document.querySelector(".task-container");

const addTask = function () {
  const newValue = document.querySelector(".task-value");
  if (newValue.value === "") {
    alert("Please enter your task");
  } else {
    taskList.push({ text: newValue.value, isDone: false });
    displayTasks();
    newValue.value = "";
  }
};

btnAdd.addEventListener("click", addTask);

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

const createTask = function (task) {
  const doneClass = task.isDone ? "task-state-done" : "";

  return `<div class="task hidden">
  <div class="task-text ${doneClass}">${task.text}</div>
  <div class="buttons">
    <button class="done-btn hidden">Done</button>
    <button class="delete-btn hidden">Delete</button>
  </div>
</div>`;
};

const displayTasks = function () {
  let tasksHtml = "";
  for (let i = 0; i < taskList.length; i++) {
    const task = createTask(taskList[i]);
    tasksHtml += task;
  }
  container.innerHTML = tasksHtml;
};

const findTaskByText = function (text) {
  return taskList.find(function (task) {
    return task.text === text;
  });
};

const findTask = function (event) {
  const btn = event.target;
  const task = btn.closest(".task");
  const taskText = task.querySelector(".task-text").textContent;
  return findTaskByText(taskText);
};

document.addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("done-btn")) {
    const taskElement = findTask(event);
    taskElement.isDone = true;
    displayTasks();
  } else if (event.target && event.target.classList.contains("delete-btn")) {
    const taskElement = findTask(event);
    const taskIndex = taskList.indexOf(taskElement);
    taskList.splice(taskIndex, 1);
    displayTasks();
  }
});
