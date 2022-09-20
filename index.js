import express from "express";
import dotenv from "dotenv";


//Initialize dotenv
dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT) || 3000;
const NODE_ENV = process.env.NODE_ENV;
const SECRET = process.env.SECRET;



app.get('/', (req, res) => {
  res.send(`Hello from ${NODE_ENV}, 🔒:${SECRET}`);
})

app.listen(PORT, () => {
  console.log(`Server started http://localhost:${PORT}`);
})