function modal(){
	let buttons = document.querySelectorAll(".button-design"),
	 	popup_design = document.querySelector('.popup-design'),
	 	popup_close = document.getElementsByClassName("popup-close")[2],

	 	consultation = document.querySelectorAll('.button-consultation'),
	 	consultationClose = document.getElementsByClassName("popup-close")[0],
	 	popup_content= document.getElementsByClassName("popup-content")[0],
	 	consultationOverlay = document.querySelector(".popup-consultation"),

	 	prise = document.querySelector(".fixed-gift"),
	 	prisePopup = document.querySelector(".popup-gift"),
	 	priseClose = document.getElementsByClassName("popup-close")[1],
	 	formFirst = document.getElementById("formFirst"),
	 	formSecond = document.getElementById("formForSend");

function popupFunctions(buttons, popup_design, popup_close, formS){
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", function(){
	 		popup_design.style.display = "block";
			document.body.style.overflow = 'hidden';	 		
	 	})
	}
	popup_close.addEventListener("click", function() {
		popup_design.style.display = "none";
		document.body.style.overflow = '';		
			let input = formS.getElementsByTagName('input');
			for(let i = 0; i < input.length; i++){
					input[i].value = '';
					// очищаем поля ввода
			}
		
	})
	window.addEventListener("click", function(e){
		if(e.target == popup_design) {
			popup_design.style.display = "none";
			document.body.style.overflow = '';	
		let input = formS.getElementsByTagName('input');
		for(let i = 0; i < input.length; i++){
				input[i].value = '';
				// очищаем поля ввода
			}
		
		}	
	})
}
popupFunctions(buttons, popup_design, popup_close, formFirst);
popupFunctions(consultation, consultationOverlay, consultationClose, formSecond);


	prise.addEventListener("click", function() {
		prise.style.display = "none";
		prisePopup.style.display = "block";
		document.body.style.overflow = 'hidden';	
	})
	priseClose.addEventListener("click", function() {
		prisePopup.style.display = "none";
		document.body.style.overflow = '';	
		let mainform = document.getElementsByClassName("mainForm");
		for(let i = 0; i < mainform.length; i++){
			let input = mainForm[i].getElementsByTagName('input');
		for(let i = 0; i < input.length; i++){
				input[i].value = ''
				// очищаем поля ввода
			}	    
		}
	})  

	function closePopupScroll(){
		window.addEventListener("click", function(e){
			if(e.target == prisePopup) {
				prisePopup.style.display = "none";
				document.body.style.overflow = '';	
			}
			let mainform = document.getElementsByClassName("mainForm");
		for(let i = 0; i < mainform.length; i++){
			let input = mainForm[i].getElementsByTagName('input');
			for(let i = 0; i < input.length; i++){
				input[i].value = ''
				// очищаем поля ввода
		}
			}
		})	
	}closePopupScroll()


	//подгрузака блоков
let loadButton = document.getElementsByClassName('button-transparent')[0];
	loadDivs = document.getElementsByClassName('removeBlocks');

loadButton.addEventListener("click", function(){
	for (let i = 0; i < loadDivs.length; i++) {			
		loadDivs[i].className = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1';
		loadDivs[i].className = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1';
		loadDivs[i].className = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1';
		loadDivs[i].className = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1';
	}
	loadButton.style.display = "none";
})




//bottom modal 
let buttonsScroll = document.getElementsByTagName('button');
for (let i = 0 ; i < buttonsScroll.length; i++){
	buttonsScroll[i].addEventListener('click', function() {
	var my_div = newDiv = null;

	  function addElement() {
	    let newDiv = document.createElement("div");
	        newDiv.classList.add('checkforScroll');
		    my_div = document.getElementById("footer");
		    document.body.insertBefore(newDiv, my_div);
			}addElement()
	})
}
window.onscroll = function() {   
	if (document.body.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight && document.querySelector('.checkforScroll') === null  )	{
	let prise = document.querySelector(".fixed-gift"),
	 	prisePopup = document.querySelector(".popup-gift"),
	 	priseClose = document.getElementsByClassName("popup-close")[1];

		prise.style.display = "none";
		prisePopup.style.display = "block";
		document.body.style.overflow = 'hidden';	

	priseClose.addEventListener("click", function() {
		prisePopup.style.display = "none";
		document.body.style.overflow = '';		    
	});  


	}
}

window.onload = function() {
	window.setTimeout(slowAlert, 60000);
		function slowAlert() {
			if(document.querySelector('.checkforScroll') === null ){
		let consultation = document.querySelectorAll('.button-consultation'),
		 	consultationClose = document.getElementsByClassName("popup-close")[0],
		 	popup_content= document.getElementsByClassName("popup-content")[0],
		 	consultationOverlay = document.querySelector(".popup-consultation");
				 		consultationOverlay.style.display = "block";
						document.body.style.overflow = 'hidden';	 		
				consultationClose.addEventListener("click", function() {
					consultationOverlay.style.display = "none";
					document.body.style.overflow = '';
				})
				window.addEventListener("click", function(e){
					if(e.target == consultationOverlay) {
						consultationOverlay.style.display = "none";
						document.body.style.overflow = '';	
					}
				})
				}
		}

	
}

}
module.exports = modal;