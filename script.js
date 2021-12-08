const newTask = document.querySelector("#newTask");
const addTaskBtn = document.querySelector("#addTask");
const incompleteList = document.querySelector(".incompleteList ul");
const completeList =  document.querySelector(".completeList ul");

const createNewTask = function(task){
  const listItem = document.createElement("li"); 
  const checkBox = document.createElement("input"); 
  const label = document.createElement("label"); 
  
  label.innerText = task;
  checkBox.type = "checkbox";
  
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  return listItem;  
};

const addTask = function(){
  const listItem = createNewTask(newTask.value);
  incompleteList.appendChild(listItem); 
  newTask.value="";
  
  incompleteItemsList(listItem, completeTask);
};

const completeTask = function(){
  const listItem = this.parentNode;
  
  const deleteBtn = document.createElement("button"); 
  deleteBtn.innerText ="Delete Task"; 
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);
  
  const checkBox = listItem.querySelector("input[type=checkbox]");
  checkBox.remove();
  
  completeList.appendChild(listItem); 
  
  completeItemsList(listItem, deleteTask);
};

const deleteTask = function(){
  const listItem = this.parentNode;
  const ul = listItem.parentNode;
  
  ul.removeChild(listItem);
};

const incompleteItemsList = function(taskItem, checkBoxClick){  
  const checkBox = taskItem.querySelector("input[type=checkbox]");
  checkBox.onclick = checkBoxClick;  
}; 

const completeItemsList = function(taskItem, deleteBtnClick){
  const deleteButton = taskItem.querySelector(".delete");
  deleteButton.onclick = deleteBtnClick;  
};

for(var i=0; i < incompleteList.children.length; i++) {
  incompleteItemsList(incompleteList.children[i], completeTask);
}
for(var i=0; i < completeList.children.length; i++) {
  completeItemsList(completeList.children[i], deleteTask);
}

addTaskBtn.addEventListener("click", addTask);
