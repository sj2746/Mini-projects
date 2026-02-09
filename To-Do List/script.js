const input = document.getElementById("input");
const btn=document.getElementById("btn");
const all_task=document.getElementById("all_task");
const spanTag=document.getElementById("spanTag")
const checkBox=document.getElementById("checkBox")

btn.addEventListener('click',()=>{
  inputValue=input.value.trim()
  all_task.innerHTML+=`<input type="checkbox" id="checkBox" onclick="strike()"><label for="checkbox" id="task"><span id="spanTag">${inputValue}</span></label><br>`
  input.value='';
  inputValue='';
  
})


