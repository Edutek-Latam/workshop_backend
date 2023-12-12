const Joi = require('joi')

function createValidator(body){
    const schema = Joi.object({
        codigo: Joi.number().required(),
        titulo:Joi.string().required(),
        descripcion:Joi.string().required(),
        estado: Joi.string().required()
    })
    
    const validation = schema.validate(body)
    const {value, error } = validation;
    console.log(error)
     if(error){
        return error.details.map(
            (x=>{
                return {message:x.message, path: x.path[0]}
            })
        )
    }

    return true
}

module.exports = { createValidator }