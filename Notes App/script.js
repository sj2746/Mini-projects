const titleInput=document.getElementById("titleInput")
const contentInput=document.getElementById("contentInput")
const addNote=document.getElementById("addNote")
const noteCard=document.getElementById("noteCard")
let notes=[]

//array
const edit=document.getElementById("edit")
let currentId=null

addNote.addEventListener("click",()=>{
  title=titleInput.value
  content=contentInput.value
  appendNote(title,content);
  titleInput.value=''
  contentInput.value=''
})

function appendNote(title,content){
  let list={
    id:Date.now(),
    title:title,
    content:content
  }
  notes.push(list)
  
  noteCard.innerHTML=noteCard.innerHTML += `
  <div>
    <h3>${list.title}</h3>
    <h4>${list.content}</h4>

    <button onclick="editNote(${list.id})">Edit</button>
    <button onclick="deleteNote(${list.id})">Delete</button>
  </div>
`

}
function editNote(id){
  console.log("Edit pressed for:", id);
  let newTitle=prompt("Enter new title")
  let newContent=prompt('Enter new content')
  currentId=id
  updateNote(currentId,newTitle,newContent)
}

function deleteNote(id){
  console.log("Delete pressed for:", id);
  currentId=id
  let note=notes.filter(note=>note.id!==currentId)
  console.log(note)
  noteCard.innerHTML=''
  notes=note
  notes.forEach(note => {
    noteCard.innerHTML=noteCard.innerHTML += `
  <div>
    <h3>${note.title}</h3>
    <h4>${note.content}</h4>

    <button onclick="editNote(${note.id})">Edit</button>
    <button onclick="deleteNote(${note.id})">Delete</button>
  </div>
`

  });
  alert("Note Updated")
  
}

function updateNote(id,t,c){
      let note=notes.find(note=>note.id===id)
      note.title=t
      note.content=c
      displayAllNotes();
}

function displayAllNotes(){
  noteCard.innerHTML=''
  notes.forEach(note => {
    noteCard.innerHTML=noteCard.innerHTML += `
  <div>
    <h3>${note.title}</h3>
    <h4>${note.content}</h4>

    <button onclick="editNote(${note.id})">Edit</button>
    <button onclick="deleteNote(${note.id})">Delete</button>
  </div>
`

  });
  alert("Note Updated")
  currentId=null
}