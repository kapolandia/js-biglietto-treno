var km = parseInt(prompt("Quanti km vuoi percorrere?"));
console.log(km);

var age = parseInt(prompt("Quanti anni hai?"));
console.log(age);

var pricing = 0.21;
var result;
var discount;

var ticketPrice = document.getElementById("ticket-price");

if(age < 20){
    discount = 0.2;
    result = ((km * pricing) - (km * pricing * discount)).toFixed(2);
}else if(age > 65){
    discount = 0.4;
    result = ((km * pricing) - (km * pricing * discount)).toFixed(2);
}else{
    result = (km * pricing).toFixed(2);
}

ticketPrice.innerHTML = "Il prezzo del tuo biglietto è di: " + result + "€"; 
console.log(result)