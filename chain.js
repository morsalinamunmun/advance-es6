//important
const data = [{id: 1, name: 'abul', address: 'kochu khet'}];

console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        {id: 1, name: 'lenovo laptop', price: 65000},
        {id: 1, name: 'macbook', price: 165000}
    ]
};
//second product price
console.log(products.data[1].price);

const user = {
    id: 50001,
    name: 'Shoriful',
    address: {
        street:{
            first: '541 uttor side',
            second: 'poribag er goli',
            third: 'nodorai'
        },
        city: 'Dhaka'
    }
}
console.log(user.address.street.second);
console.log(user.address.city);

const user2 = {
    id: 50002,
    name: 'Raju',
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}
console.log(user2.address.street?.second); //optional chaining ?