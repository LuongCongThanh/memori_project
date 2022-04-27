import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from "cookie-parser";
import * as Process from "process";
import * as mongoose from "mongoose";

dotenv.config();

//middleware
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());

//Routes
app.get('/', (req, res) => {
	res.json({mgs: "hello thanh dep trai"})
});

const URI = process.env.MONGODB_URL;
mongoose.connect(URI, {
	useCreateIndex: true,
	useFindAndModify: false,
	useNewUrlParser: true,
	useUnifiedTopolopy: true

}, err => {
	if (err) throw err;
	console.log('connected to mongoDB')
});

// server listening
const PORT = Process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log('server is running on port', PORT)
});
