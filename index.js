const express=require('express')
const app=express()
const cors=require('cors')
const port=3002
const {mongoose}=require('./connection/database')
const {routes}=require('./connection/routes')

app.use(express.json())
app.use(cors())
app.use('/',routes)


app.listen(port,()=>{
    console.log('lisiting to port',port)
})
