
import express from "express"
import dotenv, { configDotenv } from 'dotenv'
import authRoutes from "./routes/auth.routes.js"
import connectMongoDB from './db/connectMongoDB.js'

dotenv.config();
const app = express();

console.log(process.env.MONGO_URI);

app.use(express.json());   //  to parse req.body
app.use(express.urlencoded({extended:true}));  // parse to from data
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("server is ready");
});

const port = 3000; 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    connectMongoDB();
});