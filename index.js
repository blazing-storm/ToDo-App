const express = require('express');
const app = express();
const port = 3000;

const db = require('./config/mongoose');

app.use(express.static('./assets'));

// use express router
app.use('/', require('./routes'));

// set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err) {
    if(err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
})