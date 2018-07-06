function slider() {


	let slides = document.getElementsByClassName('feedback-slider-item');
	let slideNum = 1;
	showSlides(slideNum);
	prevSlides(slideNum);


	function showSlides(n) {
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
		showSlides(slideNum += n)
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
slider();