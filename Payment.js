//console.log("ok")


let openPopupBtn=document.querySelector("#paytm1");
let closePopupBtn=document.querySelector(".popup-close-btn");

openPopupBtn.addEventListener("click",function(){
    document.body.classList.add("popup-active")
})

closePopupBtn.addEventListener("click",function(){
    document.body.classList.remove("popup-active")
})

function cardspace(){
    let carddigit=document.getElementById("cardNum").value

    if(carddigit.length==4||carddigit.length==9||carddigit.length==14){
        document.getElementById("cardNum").value=carddigit+" "
        document.getElementById("cardNum").max=1
    }

}

function addslaches(){
    let expdate=document.getElementById("validtill").value

    if(expdate.length==2){
        document.getElementById("validtill").value=expdate+"/"
        document.getElementById("validtill").max=1
    }

}


