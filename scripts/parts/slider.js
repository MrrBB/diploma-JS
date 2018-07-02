function slider() {

	let slideIndex = 1,
	slides = document.getElementsByClassName('main-slider-item'),
	nextBtn = document.getElementById('sliderNext'),
	prevBtn = document.getElementById('sliderPrev');
	showSlides(slideIndex);
function showSlides(n) {

		if(n > slides.length) {slideIndex = 1;}
		if(n < 0) {slideIndex = slides.length;}

		function draw(timePassed) {
		slides[1].style.top = timePassed / 5 + 'px';
		}
		function draw(timePassed) {
		slides[0].style.top = timePassed / 5 + 'px';
		}
		// console.log(slides[n].toString().value)
		for(let i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
		slides[slideIndex  - 1].style.display = 'flex';
		
		let start = Date.now();

		let timer = setInterval(function() {
		  let timePassed = Date.now() - start;

		  if (timePassed >= 3000) {
		    clearInterval(timer); 
		    return;
		  }
		  draw(timePassed);

		}, 15);
		

}
	function plusSlides (n){
		showSlides(slideIndex += n)
	}
	function plus(){
	return plusSlides(+1)
	};




	setInterval(plus,'5000');
} slider();