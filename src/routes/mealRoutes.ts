import { Router } from "express"
import { authenticateToken } from "../middlewares/authenticateToken"
import * as mealController from "../controllers/mealControllers"

const mealRoutes = Router()

mealRoutes.get('/meal', authenticateToken, mealController.getAllmeals)
mealRoutes.post('/meal', authenticateToken, mealController.createMeal)
mealRoutes.put('/meal/update/:id', authenticateToken, mealController.updateMeal)
mealRoutes.delete('/meal/delete/:id', authenticateToken, mealController.deleteMeal)

export default mealRoutes