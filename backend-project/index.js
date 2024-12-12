// const express = require('express')
// const app = express()
// const connectdb = require('./config/db')
// const Player = require('./module/players') 
// const playerRoutes = require('./routes/playersRoutes')
// app.use(express.json())


// app.use('/api/v1/players',playerRoutes)


// app.listen(3000,()=>{
//     console.log("Server is listening in 3000");
    
// })
// connectdb()


const express = require('express');
const connectdb = require('./config/db');
const app = express()
const Player = require('./module/players')
const playerRoutes = require('./routes/playersRoutes')
app.use(express.json())
const cors = require('cors')
app.use(cors())

app.use('/api/v1/players/',playerRoutes)


app.listen(4000,(req,res)=>{
    console.log("Server is listening in 4000");
    
})

connectdb()