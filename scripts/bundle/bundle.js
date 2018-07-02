let loadButton = document.getElementsByClassName('button-transparent')[0];
	loadDivs = document.getElementsByClassName('removeBlocks');

loadButton.addEventListener("click", function(){
	for (let i = 0; i < loadDivs.length; i++) {			
		loadDivs[i].className = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1';
		loadDivs[i].className = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1';
		loadDivs[i].className = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1';
		loadDivs[i].className = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1';
	}
})