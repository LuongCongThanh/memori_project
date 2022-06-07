import mongoose from "mongoose";

const useSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please  add your name"],
        trim: true,
        maxLength: [20, "your name is up to 20 chars long"]
    },
    account: {
        type: String,
        required: [true, "please  add your email or phone "],
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "please  add your password"],
        trim: true,
    },
    avatar: {
        type: String,
        default: "https://www.w3schools.com/howto/img_avatar2.png"
    },
    type: {
        type: String,
        default: "normal"
    }
}, {
    timestamps: true
})
export default mongoose.model('Users', useSchema);