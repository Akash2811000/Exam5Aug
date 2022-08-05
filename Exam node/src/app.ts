import express ,{Express,Request,Response} from  'express'
import mongoose  from 'mongoose';
import * as dotenv from 'dotenv';
import { verifyUserWithToken } from './authentication/verifytoken';
import jwt from 'jsonwebtoken';
const app:Express = express();
dotenv.config();
const port = process.env.PORT;

const connection = mongoose.connect('mongodb://localhost:27017/nodeex')
import {router as contactrouter} from './controller/contact_controller';
import {router as loginroute} from './controller/login_controller'

app.use(express.json());
app.get('/', (req: Request , res : Response) => {
    res.send("Hello");
    res.end();
})
app.use('/login', loginroute);
app.use(verifyUserWithToken)
app.use('/contact',contactrouter)

app.listen(port, () => {
    console.log(` Server is running at ${port}`);
});