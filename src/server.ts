import express from "express"
import "dotenv/config"
import { NODE_ENV, PORT } from "./constants/env"
import cors from "cors"
import { graphqlHTTP } from "express-graphql"
import { schema } from "./schema/schema"
import { connectDB } from "./utils/db"
const app = express()
const port = PORT



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use("/graphql",graphqlHTTP({
    schema,
    graphiql: NODE_ENV ==="development"
}))


app.listen(port,()=>{
    console.log(`http://localhost:${port}/graphiql`)
    connectDB()
})