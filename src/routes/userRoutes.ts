import { Router } from "express"
import * as userController from "../controllers/userControlers"

const router = Router()

router.get('/user', userController.getAllUsers)
router.post('/user', userController.createNewUser)
router.delete('/user/id:', userController.deleteUser)

export default router