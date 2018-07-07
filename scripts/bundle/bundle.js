(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {
	window.calc = require('../parts/calc.js');
	let accordion = require('../parts/accordion.js');
	let ajax = require('../parts/ajax.js');
	let burger = require('../parts/burger.js');
	let filter = require('../parts/filter.js');
	window.mask = require('../parts/mask.js');
	let modal = require('../parts/modal.js');
	let sezes = require('../parts/sizes.js');
	let slider = require('../parts/slider.js');


	calc();
	slider();
	modal();
	ajax();
	accordion();
	filter();
	sezes();
	mask();

})










},{"../parts/accordion.js":2,"../parts/ajax.js":3,"../parts/burger.js":4,"../parts/calc.js":5,"../parts/filter.js":6,"../parts/mask.js":7,"../parts/modal.js":8,"../parts/sizes.js":9,"../parts/slider.js":10}],2:[function(require,module,exports){
function accordion() {
  var acc = document.getElementsByClassName('accordion-heading');

  function accordionFunc() {
    var panelItem = document.querySelectorAll('.accordion-heading'),
        active = document.getElementsByClassName('panel-active');

    Array.from(panelItem).forEach(function (item, i, panelItem) {
      item.addEventListener('click', function (e) {
        if (active.length > 0 && active[0] !== this) // если есть активный элемент, и это не тот по которому кликнули
          active[0].classList.remove('panel-active'); // убрать класс panel-active

        // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
        this.classList.toggle('panel-active');
      });
    });
  }
  accordionFunc();
}module.exports = accordion;

},{}],3:[function(require,module,exports){
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
module.exports = ajax;

},{}],4:[function(require,module,exports){
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
   for (let i = 0; i < buttons.length; i++) {
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
   if (document.body.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight && document.querySelector('.checkforScroll') === null  )  {
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

} modal()
},{}],5:[function(require,module,exports){
function calc(){
  let picSize = document.getElementById('size').value,
      material   = document.getElementById('material').value,
      additionalServices   = document.getElementById('options').value,
      totalValue = document.getElementsByClassName("calc-price")[0],
      promocode = document.getElementsByClassName("promocode")[0],

      total = 0,
      firstForm = 0,
      secondForm = 0,
      discount = false,
      thirdForm = 0;
 


      //доп услуги
      switch (additionalServices) {
        case "casingLuxury":
        casingPrice = 1000;
        break;
        case "fastCasing":
        casingPrice = 1500;
        break;
        case "artDelivery":
        casingPrice = 3000;
        break;
        default:
        casingPrice = 0;
      }
      //материал
      switch (material) {
        case "materialChip":
        materialPrice = 500;
        break;
        case "materialMiddle":
        materialPrice = 1000;
        break;
        case "materialLuxury":
        materialPrice = 1500;
        break;
        default:
        materialPrice = 0;
      }

      //размер
      switch (picSize) {
        case "picSizeMini":
          sizePrice = 500;
          break;
        case "picSizeSmall":
          sizePrice = 1000;
          break;
        case "picSizeBig":
          sizePrice = 1500;
          break;
        case "picSizeGiant":
          sizePrice = 2000;
          break;
        default:
        sizePrice = 0;
      }

      document.getElementById('size').addEventListener('change', function() {    
if(sizePrice == 0 || materialPrice == 0){
          totalValue.innerHTML = 0;
       } else {
          if(promocode.value == "IWANTPOPART"){
            totalValue.innerHTML = Math.floor((sizePrice + materialPrice + casingPrice) * 0.7)
          }else{
            totalValue.innerHTML = Math.floor(sizePrice + materialPrice + casingPrice);
           }
       }

     })

     document.getElementById('material').addEventListener('change', function(){       
if(sizePrice == 0 || materialPrice == 0){
          totalValue.innerHTML = 0;
       } else {
          if(promocode.value == "IWANTPOPART"){
            totalValue.innerHTML = Math.floor((sizePrice + materialPrice + casingPrice) * 0.7)
          }else{
            totalValue.innerHTML = Math.floor(sizePrice + materialPrice + casingPrice);
           }
       }

     })
     document.getElementById('options').addEventListener('change', function(){
    if(sizePrice == 0 || materialPrice == 0){
          totalValue.innerHTML = 0;
       } else {
          if(promocode.value == "IWANTPOPART"){
            totalValue.innerHTML = Math.floor((sizePrice + materialPrice + casingPrice) * 0.7)
          }else{
            totalValue.innerHTML = Math.floor(sizePrice + materialPrice + casingPrice);
           }
       }

     })

     promocode.addEventListener('change', function() {
    if(sizePrice == 0 || materialPrice == 0){
          totalValue.innerHTML = 0;
       } else {
          if(promocode.value == "IWANTPOPART"){
            totalValue.innerHTML = Math.floor((sizePrice + materialPrice + casingPrice) * 0.7)
          }else{
            totalValue.innerHTML = Math.floor(sizePrice + materialPrice + casingPrice);
           }
       }

     })
}
module.exports = calc;

},{}],6:[function(require,module,exports){
function filter() {
	var portfolioMenu = document.getElementsByClassName('portfolio-menu')[0],
	    portfolio_selectors = portfolioMenu.getElementsByTagName('li'),
	    portfolio_wrapper = document.getElementsByClassName('portfolio-wrapper')[0],
	    portfolio_block = document.getElementsByClassName('portfolio-block');

	var _loop = function _loop(i) {
		portfolio_selectors[i].addEventListener('click', function () {
			for (var _i = 0; _i < portfolio_selectors.length; _i++) {
				var current = document.getElementsByClassName("active");
				current[0].className = current[0].className.replace(" active", "");
				this.className += " active";
			}
			var portfolio_wrapper = document.getElementsByClassName('portfolio-wrapper')[0],
			    portfolio_block = document.getElementsByClassName('portfolio-block'),
			    girls = portfolio_wrapper.getElementsByClassName('girl'),
			    lovers = portfolio_wrapper.getElementsByClassName('lovers'),
			    guys = portfolio_wrapper.getElementsByClassName('guy'),
			    chefs = portfolio_wrapper.getElementsByClassName("chef");
			if (display = 'none') {
				for (var d = 0; d < portfolio_block.length; d++) {
					portfolio_block[d].style.display = 'block';
				}
			}

			function bulkhead(a, exception1, exception2, exception3) {
				if (i == a) {
					for (var _d = 0; _d < exception1.length; _d++) {
						exception1[_d].style.display = 'none';
					}
					for (var _d2 = 0; _d2 < exception2.length; _d2++) {
						exception2[_d2].style.display = 'none';
					}
					for (var _d3 = 0; _d3 < exception3.length; _d3++) {
						exception3[_d3].style.display = 'none';
					}
					document.getElementsByClassName('portfolio-no')[0].style.display = "none";
				}
			}
			bulkhead(1, girls, guys, chefs);
			bulkhead(2, girls, guys, lovers);
			bulkhead(3, guys, chefs, lovers);
			bulkhead(4, girls, chefs, lovers);
			if (i == 5 || i == 6) {
				for (var _d4 = 0; _d4 < portfolio_block.length; _d4++) {
					portfolio_block[_d4].style.display = 'none';
				}
				document.getElementsByClassName('portfolio-no')[0].style.display = "block";
			}
			if(i ==	0){
				for(let d = 0; d <  portfolio_block.length; d++){
					portfolio_block[d].style.display = 'block';
				}	
				document.getElementsByClassName('portfolio-no')[0].style.display = "none";
			}
		});
	};

	for (var i = 0; i < portfolio_selectors.length; i++) {
		_loop(i);
	}
}
module.exports = filter;
},{}],7:[function(require,module,exports){
function mask(inputName, mask, evt) {
    try {
    var text = document.getElementById(inputName);
     var value = text.value;
 
      // If user pressed DEL or BACK SPACE, clean the value
      try {
        var e = (evt.which) ? evt.which : event.keyCode;
        if ( e == 46 || e == 8 ) {
          text.value = "";
          return;
        }
      } catch (e1) {}

      var literalPattern=/[0\*]/;
      var numberPattern=/[0-9]/;
      var newValue = "";

     for (var vId = 0, mId = 0 ; mId < mask.length ; ) {
        if (mId >= value.length)
          break;

        // Number expected but got a different value, store only the valid portion
        if (mask[mId] == '0' && value[vId].match(numberPattern) == null) {
          break;
        }

        // Found a literal
        while (mask[mId].match(literalPattern) == null) {
          if (value[vId] == mask[mId])
            break;

        newValue += mask[mId++];
      }

      newValue += value[vId++];
      mId++;
    }

    text.value = newValue;
  } catch(e) {}
}
module.exports = mask;
},{}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
function sizes(){	
	let sizesBlocks = document.getElementsByClassName("sizes-block"),
		imgs = document.querySelectorAll(".sizes-block img");

		for(let i = 0; i < sizesBlocks.length; i++){
			let divsSizes = sizesBlocks[i].getElementsByTagName('p')

		sizesBlocks[i].addEventListener("mouseover", function(){
			for(let i = 0; i <divsSizes.length; i++){
				divsSizes[i].style.display = "none"
			}
		})
		sizesBlocks[i].addEventListener("mouseout", function(){
			for(let i = 0; i <divsSizes.length; i++){
				divsSizes[i].style.display = "block"
			}
		})

	
		}
}
module.exports = sizes;

},{}],10:[function(require,module,exports){
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
},{}]},{},[1]);
