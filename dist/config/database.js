"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const URI = process.env.MONGODB_URL;
// mongoose.connect(`${URI}`, {}, (err) => {
// 	if (err) throw err;
// 	console.log('Mongodb connection')
// });
// useCreateIndex: true,
// 	useFindAndModify: false,
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true
mongoose_1.default.connect(`${URI}`, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    console.log('Mongodb connection');
});
