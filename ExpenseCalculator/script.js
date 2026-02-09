const note = document.getElementById("note")
const amt = document.getElementById("amount")
const ty = document.getElementById("expenseType")
const submit = document.getElementById("submit")
const tabData = document.getElementById("trData")
let ExpData = []
let expenseMoney=0
let IncomeMoney=0
let remainMoney=0
const incomeNum=document.getElementById("incomeNum")
const expenseNum=document.getElementById("expenseNum")
const remainNum=document.getElementById("remainNum")



submit.addEventListener("click", () => {
    let noteInput = note.value
    let amount = amt.value
    let type = ty.value
    addAll(noteInput, amount, type)
    
    note.value = ''
    amt.value = ''
    ty.value = ''
   
    console.log(ExpData)
})

function addAll(input, cash, Exptype) {
    let list = {
        id: Date.now(),
        input: input,
        cash: cash,
        Exptype: Exptype
    }
    ExpData.push(list);
    console.log("added ", list)
    showList(list)
}
function showList(list){
    tabData.insertAdjacentHTML("beforeend",`
    <tr>
        <td>${list.id}</td>
        <td>${list.input}</td>
        <td>${list.cash}</td>
        <td>${list.Exptype}</td>
    </tr>
    `
)
if (list.Exptype=="Income"){
    IncomeMoney+=parseFloat(list.cash)
    incomeNum.innerHTML=`${IncomeMoney}`
}else{
    expenseMoney+=parseFloat(list.cash)
    expenseNum.innerHTML=`${expenseMoney}`
}
remainMoney=IncomeMoney-expenseMoney
remainNum.innerHTML=remainMoney
}
