const fs = require("fs");
const chalk = require("chalk");
/* this has been added to check newly created branch*/
const getNotes = () => notes;

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title === title);

    if (duplicateNotes.length === 0) {
         notes.push({
             title: title,
             body: body
         });
         const dataJSON = JSON.stringify(notes);
         saveNotes(dataJSON);
         console.log("New note Added!");
    } else {
        console.log("Note title taken!");
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const filteredNotes = notes.filter(note => note.title !== title);
    if (notes.length !== filteredNotes.length) {
        saveNotes(JSON.stringify(filteredNotes));
        console.log(chalk.green.inverse("Note with title "+ title + " removed"));
    } else {
        console.log(chalk.red.inverse("No such title found"));
    }
};


const saveNotes = (notes) => fs.writeFileSync("notes.json", notes);

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON= dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
};

const listNotes = () => {
    return loadNotes();
};

const readNotes = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if(note === undefined){
        console.log("No note found");
    } else {
        console.log(note);
    }
};

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes:  readNotes
};