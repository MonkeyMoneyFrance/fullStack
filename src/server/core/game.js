const Game = require('../models/game.js')
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
  mock : (req,res) => {
    const mock = require("../mocks/game.js")
    Game.create(mock,
    function (err, games) {
      if (err) res.status(500).send(err)
      res.status(200).send(games)
    });
  },
  set : (req,res) => {
      const game = (req.body||{}).game
      Game.findOneAndUpdate({'$and' : [
        {_id : cellarId},
      ]},{...game},{new: true,upsert:true}).then((results)=>{
        resolve(results)
      }).catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
  },
  get : (req,res) => {
      const params = req.query || {}
      Game.find(
        {'$and' : [
          params._id ? {_id : params._id} : {}, // userId vaut saut req.params.uid , soit token.decoded.userId
          params.after ? {playedAt : {'$gte' : params.after}} : {},
          params.before ? {playedAt : {'$lte' : params.before}} : {},
        ]
      }).then((results)=>{
        console.log(results)
          res.status(200).send(results)
      }).catch(err => res.status(500).send(err))
  },
  delete : (req,cellars) => {
    return new Promise((resolve,reject) => {
      Game.deleteMany(
        {'$and' : [
          {userId : req.decoded.userId}, // userId vaut saut req.params.uid , soit token.decoded.userId
          {_id:{ '$in' : cellars}}   // get all belongs to userId...
        ]}).then((results)=>{
          resolve(results)
        }).catch(err => reject(err))

    })
  }
}
