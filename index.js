const expres = require('express')
const { envs }= require('./config/env')

const router = require('./routes')

const PORT = envs.PORT || 5000
const app = expres()

//Habilitacion de body JSON
app.use(expres.json())


app.use(expres.urlencoded({extended: true}))

app.use(router)

app.listen(PORT,()=>{
    console.log(`Server linsten port ${PORT}`)
})