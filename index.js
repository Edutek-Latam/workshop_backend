const expres = require('express')
const helmet = require('helmet')

//Logs
const morgan = require('morgan')
const path = require('path')
const rfs = require('rotating-file-stream')
//

const cors = require('cors')

const mongoose = require('mongoose')


const { envs }= require('./config/env')
const router = require('./routes')

/**
 * 
 */
const accessLogStream = rfs.createStream('access.log', {
    interval: '1d', // rotate daily
    path: path.join(__dirname, 'log')
  })



const PORT = envs.PORT || 5000
const app = expres()




//Habilitacion de body JSON
app.use(expres.json())
app.use(helmet())
app.use(morgan('combined', {stream: accessLogStream}))
app.use(expres.urlencoded({extended: true}))
app.use(cors())


app.use(router)
console.log(envs.MONGODB_URL)
mongoose.connect(envs.MONGODB_URL,{useNewUrlParser: true})

app.listen(PORT,()=>{
    console.log(`Server linsten port ${PORT}`)
})