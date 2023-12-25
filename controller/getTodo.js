//import th model
const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async (req, res) => {
    try {
        //fetch all todo items from database
        const todos = await Todo.find({});
        // response update :

        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire data is found"
        })
    }
    catch (err) {
        console.log(err);

    }
}

exports.getTodoById = async (req, res) => {
    try {
        //extract todo item by id :
        // const id = await Todo.findById()   
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id })
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "failed"
            })
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: "success"
        })

    }
    catch (err) {
        console.log(err);

    }
}
