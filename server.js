
const express = require('express');
const path = require('path');
const fs = require('fs');
const api =  require('./routes');
const PORT = process.env.PORT || 3003;

const app =  express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// Include api route
app.use('/api', api);

// Get route for note
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, './public/notes.html'))
);

// GET route for index page
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);

app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);
