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
		});
	};

	for (var i = 0; i < portfolio_selectors.length; i++) {
		_loop(i);
	}
}
module.exports = filter;