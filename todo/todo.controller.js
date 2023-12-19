const service = require('./todo.servicies')
const validator = require('./todo.validator')

async function create(req, res){
    //console.log(req.body)
    const validation = validator.createValidator(req.body)
    if(validation instanceof Array){
        res.status(422).json({error: validation})
        return
    }

    const result = await service.create(req.body)
    res.status(200).json(result)
    //res.status(200).json(req.body)
}
//*
async function findAll(req, res){
    const result = await service.findAll()
    res.status(200).json(result)
}

async function findOne(req, res){
    const params = req.params
    const result = await service.findOne(params.id)
    res.status(200).json(result)
    //console.log(params)

    //res.status(200).send(params)

}

async function update(req, res){
    const { id } = req.params
    const { body } = req
    console.log(id,body)
    const result = await  service.update(id, body)
    res.status(200).json(result)
}

async function remove(req, res){}

module.exports = { create, findAll, findOne, update, remove}