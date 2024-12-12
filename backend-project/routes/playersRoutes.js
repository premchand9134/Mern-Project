// const express = require('express')
// const { getPlayers, addPlayer, updatePlayer, deletePlayer } = require('../controller/playerController')

// const playerRoutes = express.Router()

// playerRoutes.get('/get-players',getPlayers)
// playerRoutes.post('/add-players',addPlayer)
// playerRoutes.put('/update-player/:id',updatePlayer)
// playerRoutes.delete('/delete-player/:id',deletePlayer)

// module.exports = playerRoutes

const express = require('express')
const { getPlayer, addPlayer, updatePlayer, deletePlayer} = require('../controller/playerController')

const playerRoutes = express.Router()

playerRoutes.get('/get-players',getPlayer)
playerRoutes.post('/add-players',addPlayer)
playerRoutes.put('/update-player/:id',updatePlayer)
playerRoutes.delete('/delete-player/:id',deletePlayer)






module.exports = playerRoutes