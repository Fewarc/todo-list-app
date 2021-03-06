import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import listRoutes from './routes/lists.js';
import userRouter from './routes/users.js';
import notesRouter from './routes/notes.js';

const app = express(); // creating a express app
dotenv.config();

app.use(bodyParser.json({ extend: true }));         // using body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());    // using cross-origin

app.use('/todo', listRoutes);
app.use('/users', userRouter);
app.use('/notes', notesRouter);

// personal mongoDB URL
const PORT = process.env.PORT || 5000; // specified port

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => app.listen(PORT, () => {       // if conncetion succedes listen on specified port
        console.log(`Server is running on ${PORT}`); // console log the port via template string
    }))
    .catch( (error) => {        // if error occured console log the message
        console.log(error.message);
    });

    mongoose.set('useFindAndModify', false);    // get rid of the warnings