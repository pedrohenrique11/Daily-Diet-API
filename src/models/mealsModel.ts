import prisma from '../prisma/Client'

export const getAllmeals = async (id: number) => {
    return await prisma.meal.findMany({
        where: {
            id,
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
        },
        data: {
            title,
            description,
            onDiet,
            userId,
        }
    })
}

export const deleteMeal = async (id: number) => {
    return await prisma.user.delete({
        where: {
            id
        }
    })
}