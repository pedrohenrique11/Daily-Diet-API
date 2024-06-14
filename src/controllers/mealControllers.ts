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

    const meal = await mealsModel.createMeal(title, description, onDiet, userId)

    res.status(201).send("added meal!")
}