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
