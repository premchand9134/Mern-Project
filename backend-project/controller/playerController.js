// const Player = require('../module/players')


// // GETTING ALL THE PLAYERS
// const getPlayers = async (req,res)=>{

//     try {
//         const data = await Player.find({});
//         res.status(200).send({     
//             success: true,
//             message : 'Data Of Players',
//             data
//         })
        
//     } catch (error) {
//         res.status(500).send({
//             success : false,
//             message : 'INTERNAL SERVER ERROR',
//             error
//         })
//     }

// }


// // ADDING THE PLAYERS IN DB

// const addPlayer = async (req,res)=>{

//     try {

//         const {first_name,last_name,email,phone,role , available} = req.body

//         // if(!first_name || !last_name || !email || !phone || !role || !available){
//         //     res.send({
//         //         succes : false,
//         //         message :' each field is mandatory'
//         //     })
//         // }

//         await Player({
//             first_name,
//             last_name,
//             email,
//             phone,
//             role ,
//             available 
//         }).save()

//         res.status(404).send({
//             success : true,
//             message: "Data added successfully!!!"
//         })
        
//     } catch (error) {
//         res.status(500).send({
//             success : false,
//             message : 'INTERNAL SERVER ERROR',
//             error
//         })
//     }

// }

// // UPDATEING THE PLAYERS

// const updatePlayer = async (req,res)=>{

//     try {

//         const player_id = req.params.id;
//         await Player.updateOne({_id:player_id},{$set:req.body })

//         res.status(200).send({
//             success: true,
//             message : "player Updated Successfully"
//         })
        
//     } catch (error) {
//         res.status(500).send({
//             success : false,
//             message : 'INTERNAL SERVER ERROR',
//             error
//         })
//     }

// }

// const deletePlayer = async (req,res) =>{

//     try {

//         const player_id = req.params.id;

//         await Player.deleteOne({_id:player_id});

//         res.status(200).send({
//             success: true,
//             message : "player Deleted Successfully"
//         })
        
//     } catch (error) {
//         console.log(error);
        
//         res.status(500).send({
//             success : false,
//             message : 'INTERNAL SERVER ERROR',
//             error
//         })
//     }
// }

// module.exports = {getPlayers,addPlayer,updatePlayer,deletePlayer}



const Players = require('../module/players')

const getPlayer = async (req,res) => {
    
    try {
        const data = await Players.find({})
        res.status(200).send({
            success : true,
            message : "Players Data ",
            data
        })

    } catch (error) {

        res.status(500).send({
            success:false,
            message : "Internal Server Error",
            error
        })
        
    }
}

const addPlayer = async (req,res) => {
    

    try {

        const {first_name,last_name,email,phone,role, available} = req.body;    

        await Players({
            first_name,
            last_name,
            email,
            phone,
            role,
            available
        }).save();
    
        res.status(200).send({
            
            success : true,
            message : "New PLayer Added Successfully",
            
        })
        
    } catch (error) {
        res.status(500).send({        
            success : false,
            message : "Internal Server Error",            
        })
    }

}

const updatePlayer = async (req,res) => {
    
    try {

        const player_id = req.params.id;
        await Players.updateOne({_id:player_id},{$set:req.body})
        res.status(200).send({            
            success : true,
            message : "Player Updated Successfully",            
        })
        
    } catch (error) {

        res.status(500).send({        
            success : false,
            message : "Internal Server Error",            
        })

    }

}

const deletePlayer = async (req,res) => {
    

    try {

        const player_id = req.params.id;
        await Players.deleteOne({_id:player_id})

        res.status(200).send({
            success: true,
            message : "player Deleted Successfully"
            })
        
    } catch (error) {
        res.status(500).send({        
            success : false,
            message : "Internal Server Error",            
        })
    }

}

module.exports = {getPlayer,addPlayer,updatePlayer,deletePlayer}