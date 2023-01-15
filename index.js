let price = (document.getElementsByClassName ('price'));
console.log (price);

let prices = Array.from(price);
console.log (prices);

let P = prices.map((t => {return t.innerText}));
console.log (P);

function calcResult (){
let result = P.reduce(function(sum, elem) {
	return sum + +elem;
}, 0);
console.log(result);
let total = document.getElementById('total');
console.log(total);
total.textContent  = result;
}
calcResult ()

function calkDiscount ()
{
    let changePrice = P.map(t=>((+t)-(+t)*20/100));
    console.log(changePrice);
    let changePriceOne = document.getElementById ('pr1');
    changePriceOne.innerHTML = changePrice[0];
    let changePriceTwo = document.getElementById ('pr2');
    changePriceTwo.innerHTML = changePrice[1];
    let changePriceThree = document.getElementById ('pr3');
    changePriceThree.innerHTML = changePrice[2];
    let changePriceFour = document.getElementById ('pr4');
    changePriceFour.innerHTML = changePrice[3];
    let changePriceFive = document.getElementById ('pr5');
    changePriceFive.innerHTML = changePrice[4];
    let changePriceSix = document.getElementById ('pr6');
    changePriceSix.innerHTML = changePrice[5];

    function calcfinalResult (){
        let resultFinal = changePrice.reduce(function(sum, elem) {
            return sum + +elem;
        }, 0);
        console.log(resultFinal);
        let totalFinal = document.getElementById('total');
        console.log(totalFinal);
        totalFinal.textContent  = resultFinal;
        }
        calcfinalResult ()
}
