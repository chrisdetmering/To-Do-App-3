const input = document.getElementById('task');
const list = document.getElementById('taskList');

document.querySelector('#form')
.addEventListener('submit', function (e){
    e.preventDefault();
    const taskText = input.value; 
    
    if (taskText === ""){
       alert("Please enter an item!");
    } else {
        addTask(taskText);
  
    input.value = "";
    };
});

function addTask(taskText){
    const li = document.createElement('li');
    const deleteButton = createDeleteButton(li);

    li.appendChild(document.createTextNode(taskText));
    li.appendChild(deleteButton);
    addToggleTodo(li);
    list.appendChild(li);
};


function createDeleteButton(todo) {
    const deleteButton = document.createElement('button')
    deleteButton.textContent = " x ";

    deleteButton.addEventListener('click', function (e){
        todo.remove()
    });

    return deleteButton;
}

function addToggleTodo(todo) {
    todo.addEventListener('click', function(e){
        if (todo.style.textDecoration ==="line-through"){
            todo.style.textDecoration = 'none'
        } else {
            todo.style.textDecoration = "line-through"
        };
     });
}

document.querySelector('#clear')
.addEventListener('click', function(){
   list.innerHTML = "";
});

