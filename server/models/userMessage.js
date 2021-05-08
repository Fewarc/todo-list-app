import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    listsTitles: [String]
});

const userMessage = mongoose.model('UserMessage', userSchema);

export default userMessage;