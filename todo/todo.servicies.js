
const Todo = require('./todo.schema')

async function create(body){
    const newTodo = new Todo(body);
    const result = await newTodo.save()
    return result
}

async function findAll(){
    return await Todo.find({},{_id:0,created_at:0, update_at:0});
}

async function findOne(id){
    const todo = await Todo.findById(id,{_id:0,created_at:0, update_at:0})
    return todo
}

/**
 * 
 * @param { String } id 
 * @param { Object } body 
 * @returns 
 */
async function update(id,body){
    const todo = await Todo.findByIdAndUpdate(id,body,{new:true})
    return todo;
}

async function remove(){}

module.exports = { create, findAll, findOne, update, remove }