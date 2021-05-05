import express from 'express';  // will need express

import { getLists, createList } from '../controllers/lists.js'; // get and post functions stored in the other file to make the code more clear

const listsRouter = express.Router(); // crate router to use in index.js

// post and get fucntions
listsRouter.get('/', getLists);
listsRouter.post('/', createList);

export default listsRouter;