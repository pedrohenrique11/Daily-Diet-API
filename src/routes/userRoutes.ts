import { Router } from "express"
import { authenticateToken } from "../middlewares/authenticateToken"
import * as userController from "../controllers/userControlers"

const userRoutes = Router()

userRoutes.get('/user', userController.getAllUsers)
userRoutes.post('/login', userController.loginUser)
userRoutes.post('/register', userController.createNewUser)
userRoutes.delete('/user/:id', authenticateToken, userController.deleteUser)

export default userRoutes