// -------------- Configure dotenv --------------
import dotenv from 'dotenv';
dotenv.config();

// -------------- Create express app --------------
import express from 'express'
const app = express();

// -------------- CORS --------------
import cors from 'cors';
app.use(cors());

// -------------- Application Configuration --------------
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// -------------- Connect to Database --------------
import connectDB from "./config/db.js";
connectDB(process.env.DB_URI);

// -------------- Routes --------------
import user from './routes/user.js'
app.use('/user', user);

// -------------- Listen Server --------------
const Port = process.env.PORT;

app.listen(Port);