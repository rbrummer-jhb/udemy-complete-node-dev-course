// object properly shorthand

// const name = 'Andy';
// const userAge = 25;

// const user = {
//     name,
//     age: userAge,
//     location: 'USA',
// }
// console.log(user);

// object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label:productLabel, stock, rating = 5} = product;
console.log(productLabel);
console.log(stock);
console.log(rating);

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock);
}

transaction('order', product);