import ListMessage from '../models/listMessage.js';

/**
 * controllers files will always hold functions that will be
 * used by routers
 * 
 * as finding the records may take some time the fucntions 
 * have to be asynchronous (async, await)
 */

export const getLists = async (req, res) => {
    try {
        const listMessages = await ListMessage.find();

        console.log(listMessages);

        res.status(200).json(listMessages); // send status 200 - success and all of the records
    } catch (error) {
        res.error(404).json({ message: error.message });
    }
}

export const createList = async (req, res) => {
    const list = req.body;
    console.log(list);
    const newList = ListMessage(list);
    
    try {
        await newList.save();
        
        res.status(201).json(newList);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}