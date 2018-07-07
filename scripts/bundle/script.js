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









