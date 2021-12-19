import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    title: String,
    message: String,
    name:String,
    creator: String,
    tags:[String],
    selectedFile: String,
    likes:{
        type:[String],
        default:[]
    },
    createAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage',PostSchema);

export default PostMessage;