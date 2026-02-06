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
    tipperCount-=1
    tipper.value=tipperCount
}
function incrementTipPer(){
    tipperCount+=1
    tipper.value=tipperCount
}

function decrementSplitBill(){
    splitBillCount-=1
    splitBill.value=splitBillCount
}
function incrementSplitBill(){
    splitBillCount+=1
    splitBill.value=splitBillCount
}

CalBtn.addEventListener("click",()=>{
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


