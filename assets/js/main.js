//formula = (Distance / Fuel Efficiency) * Fuel Price

const tripDistance = document.querySelector("#fuel");
const efficiency = document.querySelector("#efficiency");
const price = document.querySelector("#price");
const display = document.querySelector("#display");
const btn = document.querySelector("#btn");



btn.addEventListener("click",(e)=>{
e.preventDefault();

if(tripDistance == ""){
    alert("Pleas Fill the trip Distance");
}else{
let tripDistanceVal = tripDistance.value;
let efficiencyValue = efficiency.value;
let priceVal = price.value;
let result = (tripDistanceVal / efficiencyValue ) * priceVal;
display.textContent = result.toFixed(1);
}
})