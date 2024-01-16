
const router = require('express').Router()
const Todo = require('../models/todo.js')

router.get('/', async (req,res) => {
    const allTodo = await Todo.find();
    res.render('index', {todo: allTodo});
});


router.get('/edit/todo/:id', async (req, res) => {
    const id = req.params.id;
    const { update } = req.body;    

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, {
            $set: { todo: update }
        }, { new: true });

        console.log('Successfully updated todo');
                 res.render('edit', { todo: updatedTodo})
    } catch (error) {
        console.error('Error updating todo:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/edit/todo/:id', async (req, res) => {
    const id = req.params.id;
    const { change } = req.body;    

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, {
            $set: { todo: change }
        }, { new: true });

        const allTodo = await Todo.find();
        res.render('index', {todo: allTodo});
    } catch (error) {
        console.error('Error updating todo:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
