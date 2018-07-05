function slider() {

	let slideIndex = 1,
	slides = document.getElementsByClassName('main-slider-item'),
	nextBtn = document.getElementById('sliderNext'),
	prevBtn = document.getElementById('sliderPrev'),

	bottomSlider = document.getElementsByClassName("feedback-slider-item"),
	btnNext = document.querySelector('.main-next-btn'),
	btnPrev = document.querySelector(".main-prev-btn");
	showSlides(slideIndex);
	bottomSliderList(slideIndex);
function showSlides(n) {
		if(n > slides.length) {slideIndex = 1;}
		if(n < 0) {slideIndex = slides.length;}
		for(let i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
		slides[slideIndex  - 1].style.display = 'flex';		
		let start = Date.now();	
}
	  
function bottomSliderList(n){
		if(n > bottomSlider.length) {slideIndex = 1;}
		if(n < 0) {slideIndex = bottomSlider.length;}
		for(let i = 0; i < bottomSlider.length; i++) {bottomSlider[i].style.display = "none";}
		bottomSlider[slideIndex  - 1].style.display = 'flex';
		let start = Date.now();	
}

	setInterval(plus,'5000');
	function plusSlides (n){
		showSlides(slideIndex += n)
	}

	function plus(){
	return plusSlides(+1)
	};

	function plusSlidesBottom (n){
		bottomSliderList(slideIndex += n)
	}
	function plusBottom(){
		return plusSlidesBottom(+1);

	};
	btnNext.addEventListener('click', plusBottom);
	btnPrev.addEventListener('click', function() {
		plusSlidesBottom(-1)
	})
	setInterval(plusBottom,'5000');

} 
module.exports = slider;