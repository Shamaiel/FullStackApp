const mongoose = require("mongoose")


const taskSchema = mongoose.Schema({
    title : {type : String, required : true},
    status : {type : String, enum : ["pending", "completed"], required : true},
    category : {type : String},
    user_id : {type : String, required : true}
})

const TaskModel = mongoose.model("task", taskSchema)

module.exports = {TaskModel}