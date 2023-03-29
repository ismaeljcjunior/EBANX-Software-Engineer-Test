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
        res.status(400).json({ 400: e.message })
        console.log(e)
    }
}
export const getBalance = async (req: Request, res: Response) => {

    const accountID: any = parseInt(req.query.account_id)
    console.log(accountID)

    try {
        const account = await prisma.account.findUnique({
            where: {
                ID_ACCOUNT: accountID,
            }
        })
        if (account == null) {
            return res.status(404).json({ 404: 0 })
        }
        res.status(200).json({ 200: 'OK', Account: account })
    } catch (e) {
        res.status(400).json({ 400: 0 })
        console.log(e)
    }
}
export const depositExistingAccount = async (req: Request, res: Response) => {
    const accuntData = req.body
    // try {

    //     const account = await prisma.account.findUnique({
    //         where: 
    //         ID_ACCOUNT: accuntData.destination
    //     })
    // } catch (e) {

    // }
}

