import mongoose from "mongoose";
const postSchema = mongoose.Schema({
    UserId: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    location: {
        type: String

    },
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
        type: Map,
        of: Boolean
    },
    comments: {
        types: Array,
        default: []
    }
}, {
    timeStamps: true
}

)
const Post = mongoose.model('Post', postSchema)
export default Post