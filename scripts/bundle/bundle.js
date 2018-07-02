(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {
	// let slider = require('../parts/slider.js');
	let modal = require('../parts/modal.js');
	let ajax = require('../parts/ajax.js');

	// slider();
	modal();
	ajax();
})	
},{"../parts/ajax.js":2,"../parts/modal.js":3}],2:[function(require,module,exports){
function ajax(){
	
	let message = new Object();
	message.success = 'Спасибо! Скоро мы с вами свяжемся';
	message.loading = 'Load...';
	message.failure = 'Что-то пошло не так...';

	let form = document.getElementById('formForSend'),
		mainForm = form.getElementsByClassName("form")[0],
		input = mainForm.getElementsByTagName('input'),
		textarea = mainForm.getElementsByTagName('textarea')[0],
		statusMessage = document.createElement('div'),

		formMini = document.getElementsByClassName("form")[1],
		inputsMini = formMini.getElementsByTagName('input'),

		staticForm = document.getElementById('staticForm'),
		staticIputs = staticForm.getElementsByTagName('input');


		statusMessage.classList.add('status');



	function ajaxPost(form, input, textarea){
		if(typeof textarea === "undefined") {
        textarea = null;
    	}
		form.addEventListener('submit', function(event) {
			event.preventDefault();
			form.appendChild(statusMessage);
	
			//AJAX
	
			let request = new XMLHttpRequest();
			request.open("POST", 'server.php')
	
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
			let formData = new FormData(form);
	
			request.send(formData);
			request.onreadystatechange = function() {
				if(request.readyState < 4){
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState == 4){
					if(request.status == 200 && request.status < 300){
						statusMessage.innerHTML = message.success;
					}
					else{
						statusMessage.innerHTML = message.failure;
					}
				}
			}
			for(let i = 0; i < input.length; i++){
				input[i].value = ''
				// очищаем поля ввода
			}
			textarea.value = '';
		})
	}
	ajaxPost(form, input, textarea);
	ajaxPost(formMini, inputsMini);
	ajaxPost(staticForm, staticIputs);
}
},{}],3:[function(require,module,exports){
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
	window.addEventListener("click", function(e){
		if(e.target == prisePopup) {
			prisePopup.style.display = "none";
			document.body.style.overflow = '';	
		}
	})	



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

}
module.exports = modal;
},{}]},{},[1]);
