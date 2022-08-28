//1.pay bt card

let totalAmount=localStorage.getItem("payAmount")
let payAmt=document.querySelectorAll(".payAmt")

for(let i=0;i<payAmt.length;i++){
    payAmt[i].innerText=totalAmount
}



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
        
        if( obj.cardNum.length<19 ){
            alert("please Enter Valid card Number")
        }else if(obj.validtill.length<7){
            alert("please Enter Valid card data")
        }else if(obj.cvv.length<3){
            alert("please Enter Valid card data")
        }
        else{
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
        window.location.href="homepage.html"
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

   let paytmverify=document.getElementById("paytmverify")

   paytmverify.addEventListener("click" ,subpaytm)

     function subpaytm(){
        let userpass=document.querySelector(".userpass").value
        if(userpass.length<1){
            alert("please Enter Valid Data")
        }else{
            alert("Payment done successfully")
            window.location.href="homepage.html"
        }
        
     }

    //  upi payment
    let upi = document.querySelector("#upi");
    let upiClose = document.querySelector(".upiClose");


    upi.addEventListener("click", upifun)

    function upifun() {
        document.body.classList.add("upipopup-active")
    }

    upiClose.addEventListener("click", function () {
        document.body.classList.remove("upipopup-active")
    })

    let upisubmit = document.getElementById("upisubmit")
    let upiClose1 = document.querySelector(".upiClose1");

    upisubmit.addEventListener("click", submitupi)


    function submitupi(event) {
        let upicardNum=document.getElementById("upicardNum").value

        if(upicardNum.length<14){
            alert("please Enter Valid Data")
        }else{
            document.body.classList.add("upipopup1-active")
        }

    }
    let submitupiOtp=document.getElementById("submitupiOtp")
    submitupiOtp.addEventListener("click",subotp)

    function subotp(event){

        let upipin=document.getElementById("upipin").value

        console.log(upi.length)

        if(upipin.length<4){
            alert("please Enter Valid Data")
        }else{
            alert("Payment done successfully")
            window.location.href="homepage.html"
        }



    }

    upiClose1.addEventListener("click", function () {
        document.body.classList.remove("upipopup1-active")
    })


    