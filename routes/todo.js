const router = require('express').Router();
const Todo = require('../models/todo.js');

router.post('/add/todo', (req, res) => {
    const { todo } = req.body;
    const newTodo = new Todo({ todo });
    
    newTodo.save()
        .then(() => {
            console.log('Successfully added todo');
            res.redirect('/');
        })
        .catch((error) => {
            console.error('Error adding todo:', error);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/delete/todo/:_id', async (req, res) => {
    const { _id } = req.params;

    try {
        await Todo.deleteOne({ _id });
        res.redirect('/');
    } catch (error) {
        console.error('Error deleting todo:', error);
    }
});

module.exports = router;
