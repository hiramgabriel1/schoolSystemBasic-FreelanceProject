import express from "express"
import morgan from "morgan"
import colors from "colors"
import cors from "cors"
import dotenv from "dotenv"
import connection from "./config/config.js"
import requests from "./routes/router.js"

connection()
dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(cors())

// routes
app.use(requests)

const bootstrap = () => {
    try {
        app.listen(PORT)
        console.log("funcionando en el puerto 3000")        
    } catch (error) {
        console.error(error)
    }
}

bootstrap()