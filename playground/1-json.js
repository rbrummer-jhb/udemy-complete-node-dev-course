const fs = require('fs');

// const book = {
//     title: 'Dracula',
//     author: 'Bram Stoker'
// }

// // this is a string not an object
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON)

// this returns a buffer, not a string,
// it is a way for node to represent binary data
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

console.log(data.title);