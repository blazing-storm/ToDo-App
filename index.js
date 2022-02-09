const express = require('express');
const app = express();
const port = 3000;

const db = require('./config/mongoose');
const Task = require('./models/task');

// set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// important body parser
app.use(express.urlencoded());

app.use(express.static('./assets'));

// use express router
app.use('/', require('./routes'));

app.listen(port, function(err) {
    if(err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
})