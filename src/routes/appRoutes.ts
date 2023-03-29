import * as dotenv from 'dotenv'
dotenv.config()
import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { depositExistingAccount, getBalance, resetAccount } from '../controller/accountController'

const app: Express = express()

app.use(cors())
app.use(express.json())

app.post('/reset', resetAccount )
app.get('/balance', getBalance )
app.get('/event', depositExistingAccount )

export const appRoutes = app