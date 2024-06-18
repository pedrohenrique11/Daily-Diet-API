import { Request } from "supertest";
import prisma from "../prisma/Client";
import { app } from "../index"
import  jwt  from "jsonwebtoken";

describe('User Routes', () => {
    let token: string
    let createdUsersId: number[] = []

    beforeAll(async () => {
        token = jwt.sign({id: 1, usernameL: 'testuser'}, 'secretkey', { expiresIn: '1h'})
    })

    afterAll(async () => {
        for(const users in createdUsersId) {
            await prisma.user.delete({
                where: {id: parseInt(users)}
            })
        }
        await prisma.$disconnect()
    })
})