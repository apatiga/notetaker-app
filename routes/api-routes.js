const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs =require ("fs");



router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync('db/db.json"',"utf8"),
    res.json(dbJson));
});

router.post('/api/notes',(req, res) => {
    const dbJson = JSON.parse(fs.readFileSync('db/db.json"',"utf8"));
    const newFeedbaack = {
        title: req.nody.title,
        text: req,body,text,
        id: uuidv4(),
    };
    dbJson.push(newFeedback);
    fs.writeFileSynce("db/db.json",JSON.stringify(dbJson));
    res.json(dbJson);
});

// delete request portion 

router.post('/api/notes',(req, res) => {
    const dbJson = JSON.parse(fs.readFileSync('db/db.json"',"utf8"));
    const dataJSON = JSON.parse(data);
    const NewNotes = dataJSOn.filter((note) => {
        return note.id !== req.params.id;
    });
    fs.writeFileSynce("db/db.json",JSON.stringify(newNotes));
    res.json("Note deleted.");
});

    module.exports = router;



