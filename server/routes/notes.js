import express from 'express';  

import { getNotes, createNote, saveNotes, deleteNote } from '../controllers/notes.js';
const notesRouter = express.Router(); 

// post and get fucntions
notesRouter.get('/:listID', getNotes);
notesRouter.post('/create', createNote);
notesRouter.post('/delete', deleteNote);
notesRouter.post('/save', saveNotes);

export default notesRouter;