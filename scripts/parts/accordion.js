function accordion(){
  let acc = document.getElementsByClassName('accordion-heading');



  		function accordion(){
		  let panelItem = document.querySelectorAll('.accordion-heading'),
		  active = document.getElementsByClassName('panel-active');

		Array.from(panelItem).forEach(function(item, i, panelItem) {
		  item.addEventListener('click', function(e) {
		    if (active.length > 0 && active[0] !== this) // если есть активный элемент, и это не тот по которому кликнули
		      active[0].classList.remove('panel-active'); // убрать класс panel-active

		    // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
		    this.classList.toggle('panel-active');
		  });
		});
		}
		accordion();

}
module.exports = accordion;
