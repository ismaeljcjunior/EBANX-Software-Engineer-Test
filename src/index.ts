import * as dotenv from 'dotenv'
dotenv.config()
import express from "express"
import cors from 'cors'
import { appRoutes } from './routes/appRoutes';


const app = express()
const port = process.env.PORT 

app.use(cors())
app.use(express.json())
app.use('/', appRoutes)
app.get('/', async (req, res) => {
    res.send('Hello Ebanx')
})



app.listen(port,()=>{
    console.log('listening on port port', port)
})