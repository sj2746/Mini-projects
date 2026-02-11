let options=['q',1,2,3,4,5,6,7,8,9,0,"*","%","$","&",'w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
let password=''
const display=document.getElementById("display")
const btn=document.getElementById("btn");
const cpybtn=document.getElementById("cpybtn")
let n=15

btn.addEventListener("click",()=>{
    password=''
for(let i=0;i<n;i++){
    
    let randNum=Math.floor(Math.random()*(options.length-1))+1
    console.log(randNum)
    password+=options[randNum]
}
display.value=password

})

cpybtn.addEventListener("click",()=>{
    if (display.value===""){
        alert("Generate a Password")
    }
    navigator.clipboard.writeText(display.value);
    cpybtn.innerHTML="✅"
    cpybtn.title="COPIED"
    setTimeout(()=>{
        cpybtn.innerHTML="🗒️"
        cpybtn.title="copy"
    },2000)
    
})

