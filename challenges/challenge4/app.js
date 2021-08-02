const yargs = require('yargs');

yargs.version('1.1.0');

// Create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function () {
        console.log('Listing all notes');
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read notes',
    handler: function () {
        console.log('Reading a note');
    }
})

console.log(yargs.argv);