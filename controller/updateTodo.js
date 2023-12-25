//import th model
const Todo = require("../models/Todo");

//define route handler

exports.updateTodo = async (req, res) => {
    try {
        //fetch id 
        // const id = req.params.id
        const { id } = req.params;
        const { title, description } = req.body;
        const todo = await Todo.findByIdAndUpdate({ _id: id }, { title, description, updatedAt: Date.now() });
        res.status(200).json({
            success: true,
            data: todo,
            message: "Updated successfully"
        })

    }
    catch (err) {
        console.log(err);

    }
}
