import { Request, Response } from "express" 
import * as userModel from "../models/userModel"

export const getAllUsers = async (req: Request, res: Response) => {
   const users = await userModel.getAllUsers()

   res.json(users)
}

export const loginUser = async (req: Request, res:Response) => {
    const { email, password } = req.body

    const jwt = require('jsonwebtoken')

    const userObject = await userModel.getUserByEmail(email)
    const user = userObject[0]

    if (user.password === password) {
        const token = jwt.sign({userId: user.id, username: user.name}, "your token", { expiresIn: '1h'})
    
        res.json({token})
    } else {
        res.status(401).end("Invalid credentials")
    }
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

    try {
        await userModel.deleteUser(id)
        
        res.status(201).end("User deleted")
    }
    catch {
        res.status(404).end("Id not exist")
    }
}