//import the model
const Todo = require("../models/Todo");

//define route handler

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete({ _id: id })
        res.status(200).json({
            success: true,
            data: todo,
            message: "delete successfully"
        })
    }
    catch (err) {
        console.error(err);

    }
}