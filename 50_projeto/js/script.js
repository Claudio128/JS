// função de adicionar tarefa
function addTask() {
    //titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle) {
        // clona template
        const template = document.querySelector(".template");

        const newTaks = template.cloneNode(true);

        // adiciona titulo
        newTaks.querySelector(".task-title").textContent = taskTitle;

        // remover as classes desnecessárias
        newTaks.classList.remove("template");
        newTaks.classList.remove("hide");

        // adiciona tarefa na lista
        const list = document.querySelector("#task-list");

        list.appendChild(newTaks);

        // adicionar o evento de remover
        const removeBtn = newTaks.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        });

        // adicionar evento de completar tarefa
        const doneBtn = newTaks.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this);
        })

        // limpar texto
        document.querySelector("#task-title").value = "";
    }
}

// função de remover tarefa
function removeTask(task) {
    task.parentNode.remove(true);
}

// função de completar tarefa
function completeTask(task){
    const taskToComplete = task.parentNode;

    taskToComplete.classList.toggle("done");
}

// evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){
    e.preventDefault();
    addTask();
})