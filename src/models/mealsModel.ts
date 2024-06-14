import prisma from '../prisma/Client'

export const getAllmeals = async (userId: number) => {
    return await prisma.meal.findMany({
        where: {
            userId,
        }
    })
}
 
export const createMeal = async (title: string, description:string, onDiet: boolean, userId: number ) => {
    return await prisma.meal.create({
        data: {
            title,
            description,
            onDiet,
            userId,
        }
    })
}

export const updateMeal = async (id: number, title: string, description:string, onDiet: boolean, userId: number ) => {
    return await prisma.meal.update({
        where: {
            id,
            userId,
        },
        data: {
            title,
            description,
            onDiet,
        }
    })
}

export const deleteMeal = async (id: number, userId: number ) => {
    return await prisma.meal.delete({
        where: {
            id,
            userId,
        },
    })
}
