//1.pay bt card


let openPopupBtn = document.querySelector("#paytm1");
let closePopupBtn = document.querySelector(".popup-close-btn");


openPopupBtn.addEventListener("click", function () {
    document.body.classList.add("popup-active")
})




closePopupBtn.addEventListener("click", function () {
    document.body.classList.remove("popup-active")
})

function cardspace() {
    let carddigit = document.getElementById("cardNum").value

    if (carddigit.length == 4 || carddigit.length == 9 || carddigit.length == 14) {
        document.getElementById("cardNum").value = carddigit + " "
        document.getElementById("cardNum").max = 1
    }

}

function addslaches() {
    let expdate = document.getElementById("validtill").value

    if (expdate.length == 2) {
        document.getElementById("validtill").value = expdate + "/"
        document.getElementById("validtill").max = 1
    }

}

let submit = document.querySelector("#submit");
let closeOtp = document.querySelector(".popup-close-btn1");
let submitOtp=document.querySelector("#submitOtp");

submit.addEventListener("click", myEnter)
   
   function myEnter(event){
    event.preventDafault
        let obj={
            cardNum:document.getElementById("cardNum").value,
            validtill:document.getElementById("validtill").value,
            cvv:document.getElementById("cvv").value,
        }
        
        if(obj.cardNum==="" || obj.cardNum.length<19 || obj.validtill.length==="" ||obj.cvv.length===""){
            alert("please Enter Valid Data")
        }else{
            document.body.classList.add("popup1-active")
        }
   }

closeOtp.addEventListener("click", function () {
    document.body.classList.remove("popup1-active")
})

submitOtp.addEventListener("click",otpSub)
   function otpSub(event){
    event.preventDafault

    let obj={
        otp:document.getElementById("otp").value
    }

    if(obj.otp.length<4){
        alert("please Enter Valid Data")
    }else{
        alert("Payment done successfully")
    }
   }

   //2.paytm


   let openPopup=document.querySelector("#wallet1");
   let walletcloseBtn=document.querySelector(".wallet-close-btn");
   
   openPopup.addEventListener("click",function(){
       document.body.classList.add("walletPaytm1-active")
   })
   
   walletcloseBtn.addEventListener("click",function(){
       document.body.classList.remove("walletPaytm1-active")
   })
   
   
   const starttime=1
   let time= starttime*60;
   let countdown=document.getElementById("countdown")
   
   setInterval(updatcount,1000)
   
   function  updatcount(){
       let minutes=Math.floor(time/60)
   
       let sec=time%60
   
       countdown.innerHTML=`${minutes}:${sec}`;
       time-- ;
         
   }