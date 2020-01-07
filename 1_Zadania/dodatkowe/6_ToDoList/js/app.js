document.addEventListener("DOMContentLoaded", function () {
    // punkt 1
    var taskInput = document.getElementById("taskInput");
    var addTaskButton = document.getElementById("addTaskButton");
    var taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        let task = document.createElement("li");
        let taskValue = document.createElement("h1");
        taskValue.innerText = taskInput.value;

        let buttonDelete = document.createElement("button");
        buttonDelete.innerText = "Delete";

        let buttonComplete = document.createElement("button");
        buttonComplete.innerText = "Complete";

        task.append(taskValue, buttonDelete, buttonComplete);

        taskList.appendChild(task);
    });
});