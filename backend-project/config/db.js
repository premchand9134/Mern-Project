// const mongoose = require("mongoose")

// const connectdb = async ()=>{
//     try {
//         await mongoose.connect('mongodb+srv://premchandsukka24:t1ggVRaaVEDI0yrZ@cluster0.c9o4g.mongodb.net/mydb')
//         console.log("DataBase connected");
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// module.exports = connectdb


const mongoose = require('mongoose')

const connectdb = async()=>{
    try {
        
        await mongoose.connect('mongodb+srv://premchandsukka24:t1ggVRaaVEDI0yrZ@cluster0.c9o4g.mongodb.net/mydb')
        console.log("DataBase Connected");
        

    } catch (error) {
        console.log(error);
        
    }
}

module.exports = connectdb