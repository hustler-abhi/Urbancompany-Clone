window.onscroll=function(){
	 
	if(window.pageYOffset>900){
	
		document.querySelector('#na').style.display='inherit'
	 
	}else{
		document.querySelector('#na').style.display='none'
	}

 }
 let is;
	let arr = ['salon for men', 'salon for women', 'air purifier','massages for men','hair services for woman','spa for women']
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
			window.location.href='abhi.html'
		})
	}

let locaate=localStorage.getItem('location')
document.querySelector('button').innerText=locaate

 