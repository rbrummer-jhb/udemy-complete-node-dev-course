const fs = require('fs');

const dataJSON = JSON.parse(fs.readFileSync('1-json.json').toString());

dataJSON.name = 'Jason';
dataJSON.planet = 'Earth';
dataJSON.age = 27;

const newDataJSON = JSON.stringify(dataJSON);
fs.writeFileSync('1-json.json', newDataJSON);