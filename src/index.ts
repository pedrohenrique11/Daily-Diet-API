import express from "express"
import userRoutes from "./routes/userRoutes"
import dotenv from "dotenv"

import { authenticateToken } from "./middlewares/authenticateToken"

const app = express()
dotenv.config()

app.use(express.json())
app.use(userRoutes)

app.get('/teste', authenticateToken, () => {
    console.log("tome tome")
})

app.listen(process.env.PORT, () => {
    console.log('server is running...')
})