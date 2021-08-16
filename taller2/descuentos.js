//Fórmulas de discount
const porcent = (discount) => 100 - discount;
const priceWithDiscount = (originalPrice, discount) => ( originalPrice * porcent(discount) ) / 100;

// Función del botón
function calculateDiscount(){
   const inputPrice = document.getElementById("inputPrice");
   const inputDiscount = document.getElementById("inputDiscount");
   const priceValue = Number(inputPrice.value);
   const discountValue = Number(inputDiscount.value);

   const result = priceWithDiscount(priceValue, discountValue);
   const textResult = document.getElementById("ResultP");
   textResult.innerText = `El precio con desuento es $ ${result}` 
}