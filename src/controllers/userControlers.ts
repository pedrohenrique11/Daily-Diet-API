import { Request, Response } from "express" 
import * as userModel from "../models/userModel"
import dotenv from "dotenv"

dotenv.config()

export const getAllUsers = async (req: Request, res: Response) => {
   const users = await userModel.getAllUsers()

   res.json(users)
}

export const loginUser = async (req: Request, res:Response) => {
    const { email, password } = req.body

    const jwt = require('jsonwebtoken')

    const userObject = await userModel.getUserByEmail(email)
    const user = userObject[0]

    const userPassword = password === user.password

    if (!userPassword) {
        res.status(401).end("Invalid credentials")
    }

    const token = jwt.sign({userId: user.id, username: user.name}, process.env.JWT_SECRET_KEY, { expiresIn: '1h'})
    
    res.json({token})
}

export const createNewUser = async (req: Request, res: Response) => {
    const { name, email, password} = req.body

    try {
        await userModel.createNewUser(name, email, password)

        res.status(201).end("User created")
    }
    catch {
        res.status(404)
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { password } = req.body
    const id = parseInt(req.params.id)

    const userObject = await userModel.getUserById(id)
    const user = userObject[0]

    const userPassword = password === user.password

    if (!userPassword) {
        res.status(401).end("Invalid credentials")
    }

    try {
        await userModel.deleteUser(id)
        
        res.status(201).end("User deleted")
    }
    catch {
        res.status(404).end("Id not exist")
    }
}