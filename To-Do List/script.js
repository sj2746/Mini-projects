const task=document.getElementById("addItem")
const btn=document.getElementById("btn")
const lists=document.getElementById("lists")

btn.addEventListener("click",()=>{
  if(task.value==""){
    alert("Enter a task")
    return
  }
  lists.innerHTML+=`\n    <li id="eachTask">${task.value} </li>  `
  task.value=""
});