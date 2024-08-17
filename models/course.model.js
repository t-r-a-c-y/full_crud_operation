const mongoose = require('mongoose');
const courseModel = new mongoose.Schema({
    courseName:{
        type:String,
        required:true,
        unique:true
    },
    courseDescription:{
        type:String,
        required:true
    },
    coursePrice:{
        type:Number,
        require:true
    }
});
const Course = mongoose.model('Course',courseModel);

module.exports= Course;