import express from "express"
import userRoutes from "./routes/userRoutes"
import mealRoutes from "./routes/mealRoutes"
import dotenv from "dotenv"

export const app = express()
dotenv.config()

app.use(express.json())
app.use(userRoutes)
app.use(mealRoutes)

app.listen(process.env.PORT, () => {
    console.log('server is running...')
})