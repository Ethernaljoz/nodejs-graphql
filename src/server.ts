import express from "express"
import "dotenv/config"



const app = express()
const port = process.env


app.listen(port,()=>{console.log(`http://localhost:${port}`)})