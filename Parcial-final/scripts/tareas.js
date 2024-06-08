function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value;
    if (taskText.trim() !== "") {
        var taskList = document.getElementById("task-list");
        var taskItem = document.createElement("div");
        taskItem.className = "task-item";
        taskItem.innerHTML = taskText + '<button onclick="removeTask(this)">Eliminar</button>';
        taskList.appendChild(taskItem);
        taskInput.value = "";
    } else {
        alert("Por favor ingresa una tarea válida.");
    }
}

function removeTask(task) {
    var taskItem = task.parentNode;
    taskItem.parentNode.removeChild(taskItem);
}
