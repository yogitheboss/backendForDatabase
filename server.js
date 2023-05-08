const {client} = require("./mongoDb")
const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

app.get('/getdetails',async (req,res)=>{
    try{
        const result= await client.database('newdb').collection("headphone_data2").find()
        res.send(result)
    }
    catch(err){
        console.log(err)
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
