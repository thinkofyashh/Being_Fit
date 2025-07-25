import { PrismaClient } from "./generated/prisma";


console.log(PrismaClient)

const globalPrisma = globalThis as unknown as {
    prisma:PrismaClient |undefined
} 

export const prisma =globalPrisma.prisma ?? new PrismaClient()




