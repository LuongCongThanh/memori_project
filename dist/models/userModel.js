"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const useSchema = new mongoose_1.default.Schema({
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
});
exports.default = mongoose_1.default.model('Users', useSchema);
