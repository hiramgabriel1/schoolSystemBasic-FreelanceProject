import express from "express"
import morgan from "morgan"
import colors from "colors"
import cors from "cors"

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(cors())

// routes

const bootstrap = () => {
    try {
        const PORT = process.env.PORT
        app.listen(PORT)
        console.log("funcionando en el puerto 3000")        
    } catch (error) {
        console.error(error)
    }
}

bootstrap()