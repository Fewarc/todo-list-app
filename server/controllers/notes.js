import ListMessage from '../models/listMessage.js';

export const getNotes = async (req, res) => {
    const listID = req.params.listID; // lsit to fetch the notes from
    
    try {
        const notes = await ListMessage.findOne({_id: listID});
        console.log("get notes:" + notes.notes);
        res.status(200).json(notes.notes);
    } catch (error) {
        console.log(error.message);
    }
};

export const createNote = async (req, res) => {
    const newNote = req.body;
    console.log(newNote);
    
    try {
        const list = await ListMessage.findOne({ _id: newNote.listID });

        list.notes = [...list.notes, { note: newNote.note }];
        await list.save();
        console.log(list.notes);

        res.status(201).json(list.notes);
    } catch (error) {
        res.status(409).json({message: error.message});
        console.log(error.message);
    }
};

export const saveNotes = async (req, res) => {
    const listData = req.body; // note to update data
    
    try {
        const doc = await ListMessage.findOneAndUpdate({ _id: listData.listID }, { notes: listData.notes }, { new: true });
        console.log(doc);
    }catch {
        console.log(error.message);
    }
};

export const deleteNote = async (req, res) => {
    const listData = req.body; 
    console.log(listData);
    try {
        await ListMessage.findOneAndUpdate({ _id: listData.listID }, { notes: listData.notes }, { new: true });
        const doc = await ListMessage.findOne({_id: listData.listID});
        console.log(doc.notes);
        res.send(201).json(doc.notes);
    }catch {
        console.log(error.message);
    }
};