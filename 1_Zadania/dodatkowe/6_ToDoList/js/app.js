document.addEventListener("DOMContentLoaded", function () {
    // punkt 1
    var taskInput = document.getElementById("taskInput");
    var addTaskButton = document.getElementById("addTaskButton");
    var taskList = document.getElementById("taskList");
    var removeFinishedTasksButton = document.getElementById("removeFinishedTasksButton");

    addTaskButton.addEventListener("click", function () {
        // punkt 5
        if (taskInput.value.length > 5 && taskInput.value.length < 100) {
            let task = document.createElement("li");
            let taskValue = document.createElement("h1");
            taskValue.innerText = taskInput.value;

            let buttonDelete = document.createElement("button");
            buttonDelete.innerText = "Delete";
            // punkt 3
            buttonDelete.addEventListener("click", function () {
                task.remove();
            });

            let buttonComplete = document.createElement("button");
            buttonComplete.innerText = "Complete";
            // punkt 2
            buttonComplete.addEventListener("click", function () {
                task.classList.toggle("done");
            });

            task.append(taskValue, buttonDelete, buttonComplete);

            taskList.appendChild(task);
        }
        else {
            alert("Tre�� zadania powinna mie� od 6 do 99 znak�w");
        }
        
    });

    // punkt 4
    removeFinishedTasksButton.addEventListener("click", function () {
        var doneTasks = document.querySelectorAll(".done");

        for (var i = 0; i < doneTasks.length; i++) {
            doneTasks[i].remove();
        }
    });
});