const submit = document.getElementById('generate');
const age = document.getElementById('age-range');


submit.addEventListener("click", function biglietto() {
    
    let visibility = document.getElementById('ticket')
    visibility.style.display = "block"
    const name = (document.getElementById('name')).value;
    const distance = document.getElementById('kms');
    const pricePerKilometer = 0.21;
    const price = distance.value * pricePerKilometer;
   
   
    if (age.value === 'minorenne') {
        
        let discount = price * 0.2;
        let newprice = price - discount;
        let carrozza = Math.floor(Math.random() * 11)
        let codiceCp = Math.floor(Math.random() * 999999)
        document.getElementById('carrozza').innerHTML = carrozza;
        document.getElementById('codice-cp').innerHTML = codiceCp;
        document.getElementById('nome-passeggero').innerHTML = name;
        document.getElementById('offerta').innerHTML = 'Biglietto Under-18';
        document.getElementById('costo-biglietto').innerHTML = `${newprice.toFixed(2)} €`;

    } else if (age.value === 'over65') {
   
        let discount = price * 0.4;
        let newprice = price - discount;
        let carrozza = Math.floor(Math.random() * 11)
        let codiceCp = Math.floor(Math.random() * 999999)
        document.getElementById('carrozza').innerHTML = carrozza;
        document.getElementById('codice-cp').innerHTML = codiceCp;
        document.getElementById('nome-passeggero').innerHTML = name;
        document.getElementById('offerta').innerHTML = 'Biglietto Over-65';
        document.getElementById('costo-biglietto').innerHTML = `${newprice.toFixed(2)} €`;

    } else {

        let carrozza = Math.floor(Math.random() * 11)
        let codiceCp = Math.floor(Math.random() * 999999)
        document.getElementById('carrozza').innerHTML = carrozza;
        document.getElementById('codice-cp').innerHTML = codiceCp;
        document.getElementById('nome-passeggero').innerHTML = name;
        document.getElementById('offerta').innerHTML = 'Biglietto Standard';
        document.getElementById('costo-biglietto').innerHTML = `${price.toFixed(2)} €`;
    }
 })


 discard.addEventListener("click", function annulla() {
    let visibility = document.getElementById('ticket')
    visibility.style.display = "none"
    

 })








