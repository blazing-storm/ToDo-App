// module.exports.actionName = function(req, res) {}
const { format } = require('express/lib/response');
const Task = require('../models/task');

module.exports.home = function(req, res) {
    Task.find({}, function(err, tasks) {
        if(err) {
            console.log(`Error in fetching the tasks from db: ${err}`);
            return;
        }
        return res.render('home', {
            title: "ToDo App",
            task_list: tasks
        });
    })
}

const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"
];

function formatDate(dueDate) {
    if(dueDate.length == 0) {
        return "NO DEADLINE";
    }

    const date = new Date(dueDate);
    return monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
}

// adding a new task to the database
module.exports.addTask = function(req, res) {
    Task.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: formatDate(req.body.dueDate)
    }, function(err, newTask) {
        if(err) {
            console.log(`Error in adding a new task: ${err}`);
            return;
        }
        console.log(newTask);
        return res.redirect('back');
    })
}