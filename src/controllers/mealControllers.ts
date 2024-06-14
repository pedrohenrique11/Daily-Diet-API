import { Response, Request } from "express";
import * as mealsModel from "../models/mealsModel"
import { stringify } from "querystring";


export const getAllmeals = async (req:Request, res: Response) => {
    const { userId } = req.user
    const meals = await mealsModel.getAllmeals(userId)

    res.status(201).json(meals)
}

export const createMeal = async (req: Request, res:Response) => {
    const { title, description, onDiet } = req.body
    const { userId } = req.user

    await mealsModel.createMeal(title, description, onDiet, userId)

    res.status(201).send("added meal!")
}

export const updateMeal = async (req: Request, res: Response) => {
    const { title, description, onDiet } = req.body
    const id = parseInt(req.params.id)
    const { userId } = req.user

    await mealsModel.updateMeal(id, title, description, onDiet, userId)

    res.status(204).send("Meal updated")
}

export const deleteMeal = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const { userId } = req.user

    await mealsModel.deleteMeal(id,  userId)

    res.status(204).send("Meal deleted")
}