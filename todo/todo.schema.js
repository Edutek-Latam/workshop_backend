'use strict'
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    titulo: {type: String, required: true},
    descripcion: {type: String, required: true },
    estado: { type: String, 
        enum: { values:['TO_DO', 'PENDING','DONE','IN_PROGRESS','CANCELED','NEW'], message: '{VALUE} is not supported'}, 
        required: true}

},{versionKey: false, timestamps: { createdAt: 'created_at',  updatedAt:'update_at'}})

module.exports = mongoose.model('Todo',TodoSchema,'Todo');