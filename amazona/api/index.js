const express =require("express");
const mongoose =require("mongoose");
const cors =require("cors");
const dotenv =require("dotenv");

const app = express();

dotenv.config();

//DATA BASE COONECTION
//mongoose.connect(process.env.MONGO_DB_URL,{}).then(()=>{console.log("data base connected")}).catch(e=>{console.log(e)})
app.use(express.json());
app.use(cors());

app.listen(5000,()=>{console.log("server listen to 5000 port")})