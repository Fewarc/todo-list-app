import express from 'express';  // will need express

import { getUser, createUser } from '../controllers/users.js'; // get and post functions stored in the other file to make the code more clear

const userRouter = express.Router(); // crate router to use in index.js

// post and get fucntions
userRouter.post('/login', getUser);
userRouter.post('/register', createUser);

export default userRouter;