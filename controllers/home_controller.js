// module.exports.actionName = function(req, res) {}
const Task = require('../models/task');

module.exports.home = function(req, res) {
    return res.render('home', {
        title: "ToDo App"
    });
}

// adding a new task to the database
module.exports.addTask = function(req, res) {
    console.log(req.body);
    return res.redirect('back');
    // Task.create({
    //     description: req.body.description,
    //     category: req.body.category,
    //     dueDate: req.body.dueDate
    // }, function(err, newTask) {
    //     if(err) {
    //         console.log(`Error in adding a new task: ${err}`);
    //         return;
    //     }
    //     console.log(newTask);
    //     return res.redirect('back');
    // })
}