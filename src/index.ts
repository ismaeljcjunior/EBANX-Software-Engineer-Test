import express from "express"


const app = express()
const port = process.env.PORT || 3000

app.get('/', async (req, res) => {

})


app.listen(port,()=>{
    console.log('listening on port `${port}`')
})