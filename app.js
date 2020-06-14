const notes = require('./notes');
const validator =require('validator');
const chalk = require('chalk');
const yargs = require('yargs');


// fs.writeFileSync('notes.txt','i am rabeeh');
// fs.appendFileSync('notes.txt', 'appended text ')
// console.log(notes())
// console.log(validator.isEmail("rabeeh@aqqq.com"));
// console.log(chalk.bold.bgYellow.red.inverse('success'))
// console.log(process.argv)

// yargs.version('1.1.0')
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'note body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv) {
        notes.addNotes(argv.title,argv.body);
        console.log("add note called",argv.title)
        console.log("add note called",argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title);
        console.log("remove note called")
    }
})
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler: function() {
        console.log("list note called")
        notes.listNotes();
    }
})
yargs.command({
    command: 'read',
    describe: 'read note',
    handler: function(argv) {
        notes.readNote(argv.title)
        console.log("read note called")
    }
})

yargs.parse();
console.log(yargs.argv)
