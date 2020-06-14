const fs = require('fs');
const chalk = require('chalk');

const addNotes = (title, body) => {
    const notes = loadNotes()
    saveNotes(notes, title, body);
    debugger

}

const loadNotes = () => {
    try {
        const notesBuffer = fs.readFileSync('notes.json')
        const notesString = notesBuffer.toString()
        const notesJSON = JSON.parse(notesString);
        return notesJSON;
    }
    catch{
        return [];
    }
}
function saveNotes(notes, title, body) {

    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        fs.writeFileSync('notes.json', JSON.stringify(notes))
    }
    else {
        console.log('title already taken!')
    }
}


const removeNotes = (title) => {
    const notes = loadNotes();
    const filteredNotes = notes.filter(function (note) {
        return note.title !== title;
    })
    fs.writeFileSync('notes.json', JSON.stringify(filteredNotes))
}

const listNotes = () => {
    const notesArray = loadNotes();
    notesArray.forEach(function (note) {
        console.log(chalk.blue.inverse(note.title, ' ', note.body))
    })
}

const readNote = (title) => {
    const notes = loadNotes();
    const filteredNote = notes.find(function (note) {
        return note.title === title;
    })
    console.log(chalk.blue.inverse(filteredNote.title, ' ', filteredNote.body))

}
module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}

