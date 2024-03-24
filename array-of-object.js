const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 1, name: 'hp', price: 50000},
    {id: 1, name: 'macbook', price: 165000},
    {id: 1, name: 'dell', price: 60000},
];

//map
const names = products.map(product=> product.name)//console
const prices = products.map(product => product.price);
console.log(prices);

//filter
const expensive = products.filter(p => p.price > 50000)
console.log(expensive);

//find 
const affordable = products.find(p=> p.price < 50000)
console.log(affordable);

//reduce acum-accumulator
const total = product.reduce((acum, current)=> acum + current.price, 0)
