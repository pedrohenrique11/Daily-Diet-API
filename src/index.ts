import express from "express"
import userRoutes from "./routes/userRoutes"

const app = express()

app.use(express.json())
app.use(userRoutes)

app.listen(3333, () => {
    console.log('server is running...')
})