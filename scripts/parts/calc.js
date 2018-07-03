function calc(){
  let
      picSize = document.getElementById('size').value,


      material   = document.getElementById('material').value,

      additionalServices   = document.getElementById('options').value,

      totalValue = document.getElementsByClassName("calc-price")[0],

      total = 0,
      firstForm = 0,
      secondForm = 0,
      thirdForm = 0,
      discount = false;

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
				console.log("it's 500");
        break;
        case "materialMiddle":
        materialPrice = 1000;
				console.log("it's 1000");
        break;
        case "materialLuxury":
        materialPrice = 1500;
				console.log("it's 1500");
        break;
        default:
        materialPrice = 0;
      }

      //размер
      switch (picSize) {
        case "picSizeMini":
          sizePrice = 500;
					console.log("it's 500");
          break;
        case "picSizeSmall":
          sizePrice = 1000;
					console.log("it's 1000");
          break;
        case "picSizeBig":
          sizePrice = 1500;
					console.log("it's 1500");
          break;
        case "picSizeGiant":
          sizePrice = 2000;
					console.log("it's 2000");
          break;
        default:
        sizePrice = 0;
      }

      document.getElementById('size').addEventListener('change', function() {
          	totalValue.innerHTML = sizePrice + materialPrice + casingPrice;
            console.log("it's done")
             if(materialPrice == 0){
               totalValue.innerHTML = 0;
             }
         })

     document.getElementById('material').addEventListener('change', function(){

       if(sizePrice == 0){
         totalValue.innerHTML = 0;
       } else {
         totalValue.innerHTML = sizePrice + materialPrice + casingPrice;
         console.log("done")
       }

      })




} calc()
