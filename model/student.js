

var mongoose = require("mongoose")

const studentSchema = new mongoose.Schema(
    {
        name:{type:string},
        rollno:{type:Number},
        addno:{type:Number},
        college:{type:string},

    }
)
 var StudModel=mongoose.model('students',studentSchema);

 module.exports={StudModel}