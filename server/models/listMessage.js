import mongoose from 'mongoose';

/**
 * create a mongoose schema (object) of a list - 
 * it will contain data about creator, title, every note and date of creation
 */

const listSchema = mongoose.Schema({
    creator: String,
    title: String,
    notes: [{
        type: String,
        createdAt: {
            type: Date,
            default: new Date()
        }
    }],
    createdAt: {
        type: Date,
        default: new Date()
    }
});

/**
 * modeling a schema will ad it to a collection (in this case called listmessages)
 * if the collection doesn't exist it will create it
 */
const listMessage = mongoose.model('ListMessage', listSchema); 

export default listMessage;