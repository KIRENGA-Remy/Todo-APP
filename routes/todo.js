const router = require('express').Router();
const Todo = require('../models/todo.js')

router.post('/add/todo', (req, res) => {
    const { todo } = req.body;
    const newTodo = new Todo({todo});
    newTodo.save()
           .then(()=>{
            console.log('Successfully added todo');
            res.redirect('/');
           })
})
.get('/delete/todo/:_id', async (req,res) => {
    const {_id} = req.params;
   await Todo.deleteOne({_id})
    res.redirect('/');
})

module.exports = router;
