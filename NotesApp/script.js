let notes=[]

function addList(title,content){
    let lists={
        id:Date.now(),
        title:title,
        content:content
    }
    notes.push(lists)
    
    console.log(notes)
    console.log('added')
}

addList("A","Apple")
console.log(notes)