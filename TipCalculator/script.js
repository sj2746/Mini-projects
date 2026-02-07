const tipper=document.getElementById("tipper");
const splitBill=document.getElementById("splitbill");
const TotBill=document.getElementById("totbill");
const CalBtn=document.getElementById("calBtn");


const finalBill=document.getElementById("finalBill");
const totalTip=document.getElementById("totalTip");
const PerPerson=document.getElementById("PerPerson");




let tipperCount=0;
let splitBillCount=0;
function decrementTipPer(){
    if (tipperCount==0){
        alert("No negative value allowed")
        return
    }
    tipperCount-=1
    tipper.value=tipperCount
}
function incrementTipPer(){
    tipperCount+=1
    tipper.value=tipperCount
}

function decrementSplitBill(){
    if (splitBillCount==0){
        alert("No negative value allowed")
        return
    }
    splitBillCount-=1
    splitBill.value=splitBillCount
}
function incrementSplitBill(){
    splitBillCount+=1
    splitBill.value=splitBillCount
}

CalBtn.addEventListener("click",()=>{
    if(tipperCount==0 || splitBillCount==0 || TotBill==0){
        alert("Enter all inputs")
        return
    }
    NumTotalBill=parseFloat(TotBill.value)
    TIPPERCEBTAGE=parseFloat(tipper.value)
    SPLITBILL=parseFloat(splitBill.value)
    TTP1=(NumTotalBill*(TIPPERCEBTAGE/100))
    TIP2=TTP1+NumTotalBill
    TTPFINAL=TIP2/SPLITBILL


    finalBill.innerHTML=`${TIP2}/-`
    totalTip.innerHTML=`Rs. ${TTP1}`
    PerPerson.innerHTML=`Rs. ${TTPFINAL}`
    
})


