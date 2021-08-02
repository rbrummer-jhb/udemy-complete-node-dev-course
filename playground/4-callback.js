// setTimeout(() => {
//     console.log('2 seconds are up!');
// }, 2000);

const { callbackify } = require("util");

// const names = ['Andy','Woody','Buzz'];
// const shortNames = names.filter((name) => {
//     return name.length <= 5;
// });

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         };
//         callback(data);
//     }, 2000);
// };

// const data = geocode('Centurion', (data) => {
//     console.log(data);
// });



// Goal: mess around with the callback pattern
// 1. Define an add function that accepts the correct arguments.
// 2. Use setTimeout() to simulate a 2 second delay.
// 3. After 2 seconds are up, call the callback function with the sum.
// 4. Test your work!

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 2000);
};

add(1, 4, (sum) => {
    console.log(sum);
});