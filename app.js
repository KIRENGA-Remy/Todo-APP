const express = require('express')
const mongoose = require('mongoose')

const app = express();
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true}))
app.set('view engine', 'ejs');

// Connection to database
mongoose.set("strictQuery", false);

mongoose
  .connect('mongodb://127.0.0.1:27017/todo_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected..."))
  .catch((e) => console.log('Failed to connect to db',e));



// routes
app.use('/', require('./routes/index.js'));
app.use('/', require('./routes/todo.js'));

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})