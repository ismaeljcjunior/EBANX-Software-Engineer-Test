import * as dotenv from 'dotenv'
dotenv.config()
import express from "express"
import cors from 'cors'


const app = express()
const port = process.env.PORT || 3000

app.get('/', async (req, res) => {
    res.send('Hello Ebanx')

})


app.listen(port,()=>{
    console.log('listening on port port', port)
})