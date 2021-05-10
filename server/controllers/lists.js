import ListMessage from '../models/listMessage.js';

/**
 * controllers files will always hold functions that will be
 * used by routers
 * 
 * as finding the records may take some time the fucntions 
 * have to be asynchronous (async, await)
 */

export const getLists = async (req, res) => {
    const user = req.params.username;
    console.log(req.params.username);
    try {
        const listMessages = await ListMessage.find({creator: user}, (err, results) => {
            if (err) {
                res.status(404).json({message: err.message});
                console.log(err.message);
            }

            if(results) {
                res.status(200).json(results);
                console.log(results);
            }
        });

        // res.status(200).json(listMessages);
    } catch (error) {
        console.log(error.message);
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