//12-4-2022
//

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    taskInput.value = "";

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const newTask = document.createElement("li");
        newTask.innerText = taskText;
        taskList.appendChild(newTask);
    }
}

// Function to remove a task from the list
function removeTask(event) {
    const taskList = document.getElementById("taskList");
    const taskItem = event.target;
    taskList.removeChild(taskItem);
}

// Event listeners
document.getElementById("addTaskBtn").addEventListener("click", addTask);
document.getElementById("taskList").addEventListener("click", removeTask);
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});







