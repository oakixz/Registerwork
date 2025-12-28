import express from "express";  
import dotenv from "dotenv";
 

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
const localhost = process.env.LOCALHOST || 'http://localhost:';
console.log(port);

app.listen(port, () => {
    console.log(`Server is running at ${localhost}${port}`)
})