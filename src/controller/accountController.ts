import * as dotenv from 'dotenv'
dotenv.config()
import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const resetAccount = async (req: Request, res: Response) => {
    try {
        await prisma.$executeRawUnsafe('TRUNCATE TABLE `ACCOUNT`')
        res.status(200).json({ 200: 'OK' })
    } catch (e) {
        res.status(500).json({400: e.message})
        console.log(e)
    }
}


