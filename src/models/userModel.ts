import prisma from "../prisma/Client"

export const getAllUsers = async () => {
    return await prisma.user.findMany()
}

export const getUserById = async (id: number) => {
    return await prisma.user.findMany({
        where: {
            id
        }
    })
}

export const createNewUser = async (name: string, email: string, password: string) => {
    return await prisma.user.create({
        data: {
            name,
            email,
            password,
        }
    })
}

export const deleteUser = async (id: number) => {
    return await prisma.user.delete({
        where: {
            id
        }
    })
}