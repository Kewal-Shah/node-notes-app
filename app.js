const yargs = require("yargs");

const notesUtilities = require("./notes.js");

// Creating a version
yargs.version("1.5.6");

yargs.command({
    command:"add",
    describe : "Adding a new note",
    builder :{
        title :{
            describe:"Adding a title",
            demandOption:true,
            type:'string'
        },
        body: {
            describe:"Description of title",
            demandOption: true,
            type:'string'
        }
    },
    handler : function (argv) {
        notesUtilities.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command:"remove",
    describe : "Removing a new note",
    builder: {
        title :{
            describe: "Removes a note with this title",
            demandOption:true,
            type:'string'
        }
    },
    handler : function (argv) {
        notesUtilities.removeNote(argv.title);
    }
})

yargs.command({
    command:"read",
    describe : "Read a note",
    builder: {
        title : {
            describe: "Read a note with title",
            demandOption:true,
            type:'string'
        }
    },
    handler : function (argv) {
        notesUtilities.readNotes(argv.title);
    }
})

yargs.command({
    command:"list",
    describe : "list all notes",
    handler : function () {
        const notes = notesUtilities.listNotes();
        for(note of notes){
            console.log(note.title);
        }
    }
})



yargs.parse(); // same as yargs.argv to read the command  line arguments to pass proper control to the
// respective command
//console.log(yargs.argv);




/*  ********************************************
const chalk = require("chalk");
console.log(chalk.bold.inverse.green("Succcess!"));
********************************************  */



/*  ********************************************
const notesService = require("./notes.js");
console.log(notesService.getNotes());
********************************************  */


/*  ********************************************
const validator = require("validator");
console.log(validator.isEmail("something@something.co"));
console.log(validator.isURL("http://www.example.com"));
********************************************  */





/*  ********************************************
const utilService = require("./utils.js");
console.log(utilService.name);
console.log(utilService.add(4,3));
********************************************  */

/* ********************************************
const fileSystem = require("fs")
fileSystem.writeFileSync("notes.txt","This file was created by Kewal")
fileSystem.appendFileSync("notes.txt","\nKewal wants to be a Node developer");
 ******************************************* */