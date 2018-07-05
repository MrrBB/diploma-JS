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
	 	priseClose = document.getElementsByClassName("popup-close")[1];

function popupFunctions(buttons, popup_design, popup_close){
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", function(){
	 		popup_design.style.display = "block";
			document.body.style.overflow = 'hidden';	 		
	 	})
	}
	popup_close.addEventListener("click", function() {
		popup_design.style.display = "none";
		document.body.style.overflow = '';
	})
	window.addEventListener("click", function(e){
		if(e.target == popup_design) {
			popup_design.style.display = "none";
			document.body.style.overflow = '';	
		}
	})
}
popupFunctions(buttons, popup_design, popup_close);
popupFunctions(consultation, consultationOverlay, consultationClose);


	prise.addEventListener("click", function() {
		prise.style.display = "none";
		prisePopup.style.display = "block";
		document.body.style.overflow = 'hidden';	
	})
	priseClose.addEventListener("click", function() {
		prisePopup.style.display = "none";
		document.body.style.overflow = '';		    
	})  

	function closePopupScroll(){
		window.addEventListener("click", function(e){
			if(e.target == prisePopup) {
				prisePopup.style.display = "none";
				document.body.style.overflow = '';	
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
let buttons = document.getElementsByTagName('button');
for (let i = 0 ; i < buttons.length; i++){
	buttons[i].addEventListener('click', function() {
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

}
module.exports = modal;