import * as dotenv from 'dotenv'
dotenv.config()
import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { resetAccount } from '../controller/accountController'

const app: Express = express()

app.use(cors())
app.use(express.json())

app.post('/reset', resetAccount )

export const appRoutes = app