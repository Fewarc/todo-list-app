import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    listsTitles: [String],
    message: String,
});

const userMessage = mongoose.model('UserMessage', userSchema);

export default userMessage;