// Import the router

const router = require('express').Router();

// Import the notes module
const notesRouter = require('./notes');

router.use('./notes', notesRouter);

// Export router
module.exports = router;
