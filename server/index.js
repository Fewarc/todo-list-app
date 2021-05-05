import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import listRoutes from './routes/lists.js';

const app = express(); // creating a express app

app.use(bodyParser.json({ extend: true }));         // using body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());    // using cross-origin

app.use('/lists', listRoutes);

// personal mongoDB URL
const CONNECTION_URL = 'mongodb+srv://todo-PiotrBerezka:todo-PiotrBerezka123@cluster0.rsevg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000; // specified port

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => app.listen(PORT, () => {       // if conncetion succedes listen on specified port
        console.log(`Server is running on ${PORT}`); // console log the port via template string
    }))
    .catch( (error) => {        // if error occured console log the message
        console.log(error.message);
    });

    mongoose.set('useFindAndModify', false);    // get rid of the warnings