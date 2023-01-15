let price = (document.getElementsByClassName ('price'));
console.log (price);
console.log (price.length);

let prices = Array.from(price);
console.log (prices);

let P = prices.map((t => {return t.innerText}));
console.log (P);

let result = P.reduce(function(sum, elem) {
	return sum + +elem;
}, 0);
console.log(result);

let total = document.getElementById('total');
console.log(total);
total.textContent  = result;

function calkDiscount ()
{
    let changePrice = P.forEach(t=> console.log((+t)-(+t)*20/100));
    prices= changePrice;
}
