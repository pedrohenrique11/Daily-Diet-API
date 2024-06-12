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

export const getUserByEmail = async (email: string) => {
    return await prisma.user.findMany({
        where: {
            email
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

export const updateUser = async (name: string, email: string, password: string, id: number) => {
    return await prisma.user.update({
        where: {
            id,
        },
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
