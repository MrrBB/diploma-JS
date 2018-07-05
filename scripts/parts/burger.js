function burgerMenu(){
  let burgerMenu = document.querySelector(".burger-menu"),
      burgerMenuButton = document.querySelector('.burger');

      burgerMenuButton.onclick = menuShow;
      burgerMenu.onmouseover = menuShow;
      burgerMenuButton.onmouseout = menuHide;

      function menuShow(){
      	burgerMenu.style.display = "block";
      }
      function menuHide(){
      	burgerMenu.style.display = "none";
      }

   	burgerMenuButton.addEventListener('click', function(){})

} 
module.exports = burgerMenu()