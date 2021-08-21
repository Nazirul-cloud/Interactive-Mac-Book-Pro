// Extra Memory Cost
let memoryCost = document.getElementById('memory-cost');

// Memory Event
let firstMemoryBtn = document.getElementById('first-memory-btn').addEventListener('click', function(){
     
    //8GB Memory
    memoryCost.innerText = '0';
    calculateTotal();
    finalPrice.innerText = calculateTotal();

})
let secondMemoryBtn = document.getElementById('second-memory-btn').addEventListener('click', function(){

    // 16GB Memory
    memoryCost.innerText = '180';
    calculateTotal();
    finalPrice.innerText = calculateTotal();

})


// Extra Storage Cost
let storageCost = document.getElementById('storage-cost');

// Storage Event
let firstStorageBtn = document.getElementById('first-storage-Btn').addEventListener('click', function(){
   
        // 256GB SSD storage
        storageCost.innerText = '0';
        calculateTotal();
        finalPrice.innerText = calculateTotal();
})
let secondStorageBtn = document.getElementById('second-storage-Btn').addEventListener('click', function(){
    
        // 512GB SSD storage
        storageCost.innerText = '100';
        calculateTotal(); 
        finalPrice.innerText = calculateTotal();
})
let thirdStorageBtn = document.getElementById('third-storage-Btn').addEventListener('click', function(){

        // 1TB SSD storage
        storageCost.innerText = '180';
        calculateTotal();
        finalPrice.innerText = calculateTotal();
})

// Delivery charge
let deliveryCost = document.getElementById('delivery-cost');

// Delivery Event
let firstDeliveryBtn = document.getElementById('first-delivery-btn').addEventListener('click', function(){

        // free delivery
        deliveryCost.innerText = '0';
        calculateTotal();
        finalPrice.innerText = calculateTotal();

})
let secondDeliveryBtn = document.getElementById('second-delivery-btn').addEventListener('click', function(){

        // 20$ fee delivery
        deliveryCost.innerText = '20';
        calculateTotal();
        finalPrice.innerText = calculateTotal();

})

// Best Price
let bestPrice = document.getElementById('best-price');

// Total Price
let totalPrice = document.getElementById('total-price');
function calculateTotal(){
    
    return totalPrice.innerText = parseInt(bestPrice.innerText) + parseInt (memoryCost.innerText) + parseInt (storageCost.innerText) + parseInt(deliveryCost.innerText);
}
//Footer Final Total
finalPrice = document.getElementById('final-price');
finalPrice.innerText = calculateTotal();

// Promo Code
promoInput = document.getElementById('promo-code');
promoButton = document.getElementById('promo-btn');

promoButton.addEventListener('click', function(){
    if (promoInput.value == 'stevekaku'){
        
        finalPrice.innerText = calculateTotal() - (calculateTotal() * (20/100));
        promoInput.value = "";
        return finalPrice.innerText; 
    }
    const newCal = promoInput.value = "";
})
