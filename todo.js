function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value.trim();
    if (taskText === "") return; 

    const taskList = document.getElementById("task-list");


    const taskItem = document.createElement("li");
    taskItem.innerText = taskText;


    taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });


    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "&times;";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = () => taskItem.remove();

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);


    taskInput.value = "";
}
