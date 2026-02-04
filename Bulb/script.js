let bulb=false
let res=document.getElementById("res")
let aSPtag=document.getElementById("rse")


function changeImage(){
    const img=document.getElementById("myImg");
    
    if(bulb==0){//if off
        img.src="pic_bulbon.gif";
        bulb=true
        aSPtag.innerHTML=`ON`
        aSPtag.style.color="green"
       
        
    } else{
        img.src="pic_bulboff.gif"
        bulb=false
        aSPtag.innerHTML=`OFF`
        aSPtag.style.color="red"
    }
}

