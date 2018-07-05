function filter(){
	var portfolioMenu = document.getElementsByClassName('portfolio-menu')[0],
	portfolio_selectors = portfolioMenu.getElementsByTagName('li'),
	portfolio_wrapper = document.getElementsByClassName('portfolio-wrapper')[0],
	portfolio_block = document.getElementsByClassName('portfolio-block');
	for (let i = 0; i < portfolio_selectors.length; i++ ){
		portfolio_selectors[i].addEventListener('click', function() {
			for (let i = 0; i < portfolio_selectors.length; i++) {
			    let current = document.getElementsByClassName("active");
			    current[0].className = current[0].className.replace(" active", "");
			    this.className += " active";
			}
			let portfolio_wrapper = document.getElementsByClassName('portfolio-wrapper')[0],
				portfolio_block = document.getElementsByClassName('portfolio-block'),
				girls = portfolio_wrapper.getElementsByClassName('girl'),
				lovers = portfolio_wrapper.getElementsByClassName('lovers'),
				guys = portfolio_wrapper.getElementsByClassName('guy'),
				chefs = portfolio_wrapper.getElementsByClassName("chef");
				if(display = 'none'){
					for(let d = 0; d <  portfolio_block.length; d++){
						portfolio_block[d].style.display = 'block';
					}						
				}

				function bulkhead (a, exception1, exception2, exception3){
					if(i == a){
						for(let d = 0; d < exception1.length; d++){				
						exception1[d].style.display = 'none'
						}
						for(let d = 0; d < exception2.length; d++){				
						exception2[d].style.display = 'none'
						}
						for(let d = 0; d < exception3.length; d++){				
						exception3[d].style.display = 'none'
						}
						document.getElementsByClassName('portfolio-no')[0].style.display = "none";
					}
				}
				bulkhead(1, girls, guys, chefs);
				bulkhead(2, girls, guys, lovers);
				bulkhead(3, guys, chefs, lovers);
				bulkhead(4, girls, chefs, lovers);
					if(i ==	5 || i == 6){
						for(let d = 0; d <  portfolio_block.length; d++){
							portfolio_block[d].style.display = 'none';
						}	
						document.getElementsByClassName('portfolio-no')[0].style.display = "block";
					}
		})
	}
}
module.exports = filter;