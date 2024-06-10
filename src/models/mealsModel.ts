import prisma from '../prisma/Client'

export const getAllmeals = async () => {
    return await prisma.meal.findMany()
}
 
export const createMeal = async (title: string, description:string, onDiet: boolean, date: string, userId: number ) => {
    return await prisma.meal.create({
        data: {
            title,
            description,
            onDiet,
            date,
            userId,
        }
    })
}

export const updateMeal = async (id: number, title: string, description:string, onDiet: boolean, date: string, userId: number ) => {
    return await prisma.meal.update({
        where: {
            id,
        },
        data: {
            title,
            description,
            onDiet,
            date,
            userId,
        }
    })
}

export const mealUser = async (id: number) => {
    return await prisma.user.delete({
        where: {
            id
        }
    })
}