const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes/index')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload({createParentPath:true}))

app.use('/api',router)
app.use('/',(req,res)=>{
    res.send({
        message : 'Welcome To Kyriel Otakudesu Rest Api',
        createdBy : 'Xyroo/Kyriel Create With Love <3'
    })
})
app.use('/api',(req,res) =>{
    res.send({
        message:'check our github for more info',
        github :'https://github.com/NanoXyinDev/KyrielApi-OtakuDesu'
    })
})


app.use('*',(req,res) =>{
    res.json({
        'status':'not found path',
        message: 'https://github.com/NanoXyinDev/KyrielApi-OtakuDesu'
    })
})
app.listen(port, () => {
    console.log('listening on port', port)
})
