const opt1=document.getElementById("opt1")//label
const opt2=document.getElementById("opt2")//label
const opt3=document.getElementById("opt3")//label
const opt4=document.getElementById("opt4")//label
const question=document.getElementById("question")
const nextQuestion=document.getElementById("next")
let question1={
    q1:"What is the full form of CPU",
    option1:"Central Processing Unit",
    option2:"Center Processing Unit",
    option3:"Control Processing Unit",
    option4:"Central Practice Unit"
};

question1Display();

function question1Display(){
    question.innerHTML=question1.q1
    opt1.innerHTML=question1.option1
    opt2.innerHTML=question1.option2
    opt3.innerHTML=question1.option3
    opt4.innerHTML=question1.option4
}
function checkAns(){
   if(option1.checked==false && option2.checked==false && option3.checked==false&&option4.checked==false){
    alert("Enter your choice")
    return
   }
   if (option1.checked==true){
    alert("Your Answer is Correct")
   }else{
    alert("Your answer is Wrong 🥲")
   }
}
