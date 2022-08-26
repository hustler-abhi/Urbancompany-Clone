let savings_amt = document.getElementById("amt_saved");

let number_btn = document.getElementsByClassName("number_btn");

let saved_amt =  number_btn[4].innerText*144;
// console.log('savings_amt:', saved_amt);
savings_amt.innerText = `₹${saved_amt}`;
number_btn[4].style.backgroundColor = 'var(--light_grey)';
number_btn[4].style.borderColor = 'var(--secondary_grey)';
number_btn[4].style.color = 'var(--primary_grey)';
number_btn[4].style.fontWeight = '600';
// console.log(number_btn);
for(let key in number_btn){
    number_btn[key].onclick = function(){
        saved_amt =  number_btn[key].innerText*144;
        // console.log('savings_amt:', saved_amt);
        savings_amt.innerText = `₹${saved_amt}`;
        number_btn[key].style.backgroundColor = 'var(--light_grey)';
        number_btn[key].style.borderColor = 'var(--secondary_grey)';
        number_btn[key].style.color = 'var(--primary_grey)';
        number_btn[key].style.fontWeight = '600';
        
        // console.log(number_btn[key]);
    };
}