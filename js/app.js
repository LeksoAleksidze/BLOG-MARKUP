

// Scroll Down
const  header = document.querySelector('header');

window.onscroll = function(){
	let top = scrollY;
	if( top > 100){

		header.classList.add('sticky');
	}else{
		header.classList.remove('sticky');
	}
};


const hum = document.querySelector('.hum');
const mobileHeader = document.querySelector('#mobileHeader');

hum.addEventListener('click', ()=>{
	mobileHeader.classList.toggle('change');
});