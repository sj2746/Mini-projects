const inc=document.getElementById("inc");
const dec=document.getElementById("dec");
const rst=document.getElementById("rst");
const disp=document.getElementById("result")
let counter=0;

disp.innerHTML=`${counter}`;


function updateDisplay(){
    disp.innerHTML=`${counter}`;
}
inc.addEventListener("click",increment);
dec.addEventListener("click",decrement);
rst.addEventListener("click",reset);

 function increment(){
    counter+=1;
    updateDisplay();
}

function decrement(){
    if (counter<1){
        alert("Already Zero")
        return
    }
    counter-=1;
    updateDisplay();
}

function reset(){
    counter=0;
    updateDisplay();
}