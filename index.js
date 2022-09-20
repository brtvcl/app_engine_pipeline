import express from "express";
import dotenv from "dotenv";
import fs from "fs/promises";


//Initialize dotenv
dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT) || 3000;
const NODE_ENV = process.env.NODE_ENV;
const SECRET = process.env.SECRET;



app.get('/', async (req, res) => {

    let content = await fs.readFile("./secret_file.json");
    let string = content.toString();

    res.send(`Hello from ${NODE_ENV}, 
    <br/>🔒:${SECRET}
    <br/>📄:${string}
    `);
})

app.listen(PORT, () => {
  console.log(`Server started http://localhost:${PORT}`);
})