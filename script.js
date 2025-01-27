document.getElementById('taskInput').addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        addTask()
    }

})


function addTask() {
    const newTask = document.createElement('li')
    const taskList = document.getElementById("tasklist")
    taskList.appendChild(newTask)
    newTask.textContent = document.getElementById('taskInput').value // This is used to store value
    document.getElementById('taskInput').value = ""  // this will empty the input box
    addCheckboxAndDelete(newTask);
   
}

function addCheckboxAndDelete(newTask) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newTask.prepend(checkbox);
    
    
    const deletebtn = document.createElement('button')
    deletebtn.textContent = 'Delete'
    newTask.appendChild(deletebtn)
    deletebtn.onclick = function () {
        newTask.remove()
    }
}


