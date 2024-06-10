import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const headerKey = process.env.TOKEN_HEADER_KEY || 'anotherHeader';
const jwtSecrsetKey = process.env.JWT_SECRET_KEY || 'anotherSecretKey';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    
    const token = req.header(headerKey)?.replace('Bearer ', '') || 'anotherHeader';

    if (!token) {
        res.status(401).json({Access: "Danied"})
        } 
    
    try {
        jwt.verify(token, jwtSecrsetKey)
        res.status(201).json({Access: "Granted"})
    }
    catch {
        res.status(401).json({Access: "Danied"})
    }
    
}
