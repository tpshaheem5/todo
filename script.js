const taskList = document.getElementById('task-list');
const addButton = document.getElementById('add-task');
const newInput = document.getElementById('new-task');

// local storage 
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// ADD task list
addTodoList();


addButton.addEventListener('click', () => {

   if(newInput.value===""){
    alert("please enter somthing")
   }else{
    
  const newTaskInput = document.getElementById('new-task');

  const newTaskValue = newTaskInput.value;

  tasks.push(newTaskValue);

  // clear the new task input
  newTaskInput.value = '';

  // update tasks array to local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // add the updated task list
  addTodoList();
   }
});

function addTodoList() {
  
  taskList.innerHTML = '';

  // add each task as a list item with a delete button
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      // Remove the task from the tasks array
      tasks.splice(index, 1);

      // Save the updated tasks array to local storage
      localStorage.setItem('tasks', JSON.stringify(tasks));

      // Render the updated task list
      addTodoList();
    });

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  });
}