let tasks=[]
const add = ()=>{
    const addInput=document.getElementById("addInput")
    const task=addInput.value;
    
 if(task){
    tasks.push(task)
    addInput.value='';
    displayTasks();
 }
 else{
    alert("Please enter a task")
 }
}
const remove = () =>{
  tasks.pop()
  displayTasks()
  
}
 const displayTasks = ()=>{
    const taskList = document.getElementById("taskLists")
    taskList.innerHTML='';
    
    tasks.forEach((task, position)=>{
      const li = document.createElement('li')
      li.textContent= `${position+1}.  ${task}`;
      taskList.appendChild(li)
    })
 }
