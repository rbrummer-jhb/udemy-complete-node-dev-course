const fs = require('fs');
const chalk = require('chalk');
 
// This parses the notes binary => JSON string => object.
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

// This writes the object => JSON string back into the file.
const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJsON);
}

// This adds to the properties of the parsed object
// and saves it back into the file it came from.
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToRemove = notes.filter((note) => note.title === title);

    if (notesToRemove.length !== 0) {
        console.log(chalk.green.inverse(`${title} note removed!`));
        notes.pop({
            title: title
        });
        saveNotes(notes);
    } else {
        console.log(chalk.red.inverse(`No ${title} note found!`));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.yellow.inverse(`Your Notes:`));
    notes.forEach((note) => console.log(`Title: ${note.title}`));
}

const readNote = (title) => {
    const notes = loadNotes();
    const noteToRead = notes.find((note) => note.title === title);

    if (noteToRead) {
        console.log(chalk.inverse(`Title: ${noteToRead.title}`));
        console.log(chalk.inverse(`Body: ${noteToRead.body}`));
    } else {
        console.log(chalk.red.inverse(`No ${title} note found`));
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};
