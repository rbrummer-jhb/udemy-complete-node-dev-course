const fs = require('fs');

fs.writeFileSync('notes.txt', 'Now this looks like a job for me.');
fs.appendFileSync('notes.txt', ' So everybody, just follow me.')