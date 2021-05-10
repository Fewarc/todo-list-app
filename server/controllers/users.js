import UserMessage from '../models/userMessage.js';

export const getUser = async (req, res) => {
    const user = req.body;

    try {
        const userMessage = await UserMessage.findOne({ $and: [{username: user.username}, {password: user.password}] }, (err, results) => {
            if (err) {
                res.status(404).json({ message: error.message });
                console.log(error.message);
            } 

            if (results) {
                res.status(200).json({ username: user.username, success: true});
            }else {
                res.status(200).json({ username: user.username, success: false});
            }
        });

    } catch (error) {
        console.log(error.message);
    }
};

export const createUser = async (req, res) => {
    const user = req.body;
    const newUser = UserMessage(user);
    console.log(newUser);
    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({message: error.message});
        console.log(error.message);
    }
};