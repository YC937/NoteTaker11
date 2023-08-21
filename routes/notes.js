const router = require('express').Router();
const uuid = require('uuid');
const db = require("../db/notes.json");
const fs = require("fs");
let notesData = db;

// Get route for notes
router.get('/', (req, res) => {
    fs.readFile('db/db.json', function (err, data) {
        res.json(JSON.parse(data))
    })
});

// Post route for new note
router.post('/', (req, res) => {
    fs.readFile('db/db.json', function (err, data) {
        let userdata = JSON.parse(data)
        const { text, title } = req.body;
        const newnote = {
            text,
            title,
            id: uuid()
          };
        userdata.push(newnote)
        fs.writeFile('db/db.json', JSON.stringify(userdata, null, 4), function (err) {
            if (err) throw err;
            res.redirect("/notes")
        })
    })
});

notes.delete("/notes/:id", (req, res) => {
    const Delete = req.params.id;
    notesData = notesData.filter((note) => note.id !== Delete);

    const notesString = JSON.stringify(notesData);
    fs.writeFile(`./db/notes.json`, notesString, (err) => {
      err ? console.log(err) : console.log(`Saved`);
      res.send();
    });
});

module.exports = router;
