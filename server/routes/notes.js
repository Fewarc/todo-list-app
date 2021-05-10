import express from 'express';  

import { getNotes, createNote } from '../controllers/notes.js';
const notesRouter = express.Router(); 

// post and get fucntions
notesRouter.get('/:listID', getNotes);
notesRouter.post('/', createNote);

export default notesRouter;