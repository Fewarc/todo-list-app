import ListMessage from '../models/listMessage.js';

export const getNotes = async (req, res) => {
    const listID = req.params.listID; // lsit to fetch the notes from

    try {
        const notes = await ListMessage.find({_id: listID}, 'notes', (err, results) => {
            if (err) {
                res.status(404).json({ message: error.message });
                console.log(error.message);
            } 

            if (results) {
                console.log("getNotes results:" + results);
            }else {
                
            }
        });

    } catch (error) {
        console.log(error.message);
    }
};

export const createNote = async (req, res) => {
    const newNote = req.body;
    console.log(newNote);
    
    try {
        const allNotes = await ListMessage.findOneAndUpdate({ _id: newNote.listID }, { notes: [ newNote.note] }, { new: true });
        console.log(allNotes); // TODO : as .save();
        // res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({message: error.message});
        console.log(error.message);
    }
};