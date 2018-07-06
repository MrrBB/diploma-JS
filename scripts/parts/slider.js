function slider() {

	let autoSlider = document.getElementsByClassName('main-slider-item');
	let slideShow = 1;
	let slideNum = 1;
	let slides = document.getElementsByClassName('feedback-slider-item');
	nextSlides(slideShow);
	nextAutoSlideFunction(slideNum);


	function nextAutoSlideFunction(n) {
		if(n > autoSlider.length) {slideShow = 1;}
    	if(n < 0) {slideShow = autoSlider.length;}
		for(let i = 0; i < autoSlider.length; i++){
			autoSlider[i].style.display = "none";
			autoSlider[i].classList.remove("animated", "bounceInDown");
		}
		autoSlider[slideShow  - 1].style.display = 'flex';
		autoSlider[slideShow - 1].classList.add("animated", "bounceInDown");
	}

	function plusAutoSlides (n){
		nextAutoSlideFunction(slideShow += n)
  	}

	function nextAutoSlidesFunction(){
		return plusAutoSlides(+1)
	};

	setInterval(nextAutoSlidesFunction,'5000');



	function nextSlides(n) {
		if(n > slides.length) {slideNum = 1;}
    	if(n < 0) {slideNum = slides.length;}
		for(let i = 0; i < slides.length; i++){
			slides[i].style.display = "none";
			slides[i].classList.remove("animated", "bounceInRight");
		}
		slides[slideNum  - 1].style.display = 'flex';
		slides[slideNum - 1].classList.add("animated", "bounceInRight");
	}

	function plusSlides (n){
		nextSlides(slideNum += n)
  	}

	function next(){
		return plusSlides(+1)
	};

	function prevSlides(n) {
		if(n > slides.length) {slideNum = 1;}
    	if(n < 1) {slideNum = slides.length}
		for(let i = 0; i < slides.length; i++){
			slides[i].style.display = "none";
			slides[i].classList.remove("animated", "bounceInRight");
		}
		slides[slideNum  - 1].style.display = 'flex';
		slides[slideNum - 1].classList.add("animated", "bounceInLeft");
	}
	function minusSlides(n){
		prevSlides(slideNum += n)
  	}

	function prev(){
		minusSlides(-1)
	}
	document.getElementById('nextBTN').addEventListener('click', next);
	document.getElementsByClassName("main-prev-btn")[0].addEventListener('click', prev);
	setInterval(next,'7000');

} 
module.exports = slider;