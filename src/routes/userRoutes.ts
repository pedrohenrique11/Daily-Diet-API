import { Router } from "express"
import * as userController from "../controllers/userControlers"

const userRoutes = Router()

userRoutes.get('/user', userController.getAllUsers)
userRoutes.post('/user', userController.createNewUser)
userRoutes.delete('/user/:id', userController.deleteUser)

export default userRoutes