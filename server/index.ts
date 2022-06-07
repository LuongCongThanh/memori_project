import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from "cookie-parser";
import * as Process from "process";
// Database
import './config/database'
import routes from "./routes";

dotenv.config();

//middleware
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());

//Routes
app.use("/api", routes.authRouter)


// server listening
const PORT = Process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('server is running on port', PORT)
});
