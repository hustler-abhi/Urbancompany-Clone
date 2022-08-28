window.onscroll=function(){
	 
	if(window.pageYOffset>900){
	
		document.querySelector('#na').style.display='inherit'
	 
	}else{
		document.querySelector('#na').style.display='none'
	}

 }
 let is;
	let arr = ['salon for men', 'salon for women', 'air purifier','massages for men','hair services for woman','spa for women','salon prime']
	function main(func, delay) {

		if (is) {
			clearTimeout(is)
		}
		is = setTimeout(() => {
			func()
			 
		}, delay)


	}

	function bounce() {

		let value = document.querySelector('#abhi').value
		
		arr.forEach(function (ele,i) {
			if (ele.includes(value)) {
				console.log(ele,i)
				display(ele)
			}
		})
		document.querySelector('#abhi').value=null 
	}


	function display(data){
		document.querySelector('#display').innerHTML
		let p=document.createElement('p');
		p.innerText=data
		let div=document.createElement('div')
		div.append(p)
		document.querySelector('#display').append(div)
		div.addEventListener('click',()=>{
			window.location.href='men saloon page.html'
		})
	}

	let abhi=document.querySelectorAll('.home>div');
 

	for(let i=0;i<abhi.length;i++){
		abhi[i].addEventListener('click',redirect)
	}

function redirect(){
	window.location.href='men saloon page.html'
}

let mid_sec1=document.querySelectorAll('#midesec1>div');


for(let i=0;i<mid_sec1.length;i++){
	mid_sec1[i].addEventListener('click',()=>{
		window.location.href='men saloon page.html'
	})
}
let mid_sec2=document.querySelectorAll('#midesec2>div');


for(let i=0;i<mid_sec1.length;i++){
	mid_sec2[i].addEventListener('click',()=>{
		window.location.href='men saloon page.html'
	})
}
let nad=document.querySelectorAll('#nad>div');
for(let i=0;i<nad.length;i++){
	nad[i].addEventListener('click',()=>{
		window.location.href='men saloon page.html'
	})
}
let place=localStorage.getItem('location')
document.querySelector('button').innerText=place
 