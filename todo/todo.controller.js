const service = require('./todo.servicies')
const validator = require('./todo.validator')

async function create(req, res){
    console.log(req.body)
    const validation = validator.createValidator(req.body)
    if(validation instanceof Array){
        res.status(422).json({error: validation})
        return
    }
    res.status(200).json(req.body)
}
//*
async function findAll(req, res){}

async function findOne(req, res){
    const params = req.params

}

async function update(req, res){}

async function remove(req, res){}

module.exports = { create, findAll, findOne, update, remove}