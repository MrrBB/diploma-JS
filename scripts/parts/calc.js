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
       if(promocode.value == "IWANTPOPART"){
         totalValue.innerHTML = Math.floor((sizePrice + materialPrice + casingPrice) * 0.7);
         discount = true;
       } else {totalValue.innerHTML = Math.floor(sizePrice + materialPrice + casingPrice);}
     })
}
module.exports = calc;
