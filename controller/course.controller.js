const Course = require('../models/course.model');

const getCourses = async(req,res)=>{
    try {
        const course = await Course.find();
        res.status(200).json({course});
    } catch (error) {
        res.status(500).json({message:message.error});
    }
}

const getCourse = async(req,res)=>{
    try {
        const {id}= req.params
        const course = await Course.findById(id);
        if(!course){
            res.status(404).json({message:`The course with this id ${id} doesn't exist`});
        }else{
            res.status(200).json({course});
        }
    } catch (error) {
        res.status(500).json({message:message.error})
    }
}

const createCourse = async(req,res)=>{
    try {
        const {courseName,courseDescription,coursePrice}= req.body
        const existCourse = await Course.findOne({courseName});
        if(existCourse){
            res.status(404).json({message:`${courseName} already exists`});
        }else{
            const course = new Course({
                courseName,courseDescription,coursePrice
            })
            await course.save();
            res.status(200).json({course});
        }
    } catch (error) {
        res.status(500).json({message:message.error})
    }
}

const updateCourse = async(req,res)=>{
    try {
        const {id}= req.params
        const course = await Course.findById(id)
        if(!course){
            res.status(400).json({message:`Course that has ${id} as id doesn't exist`});
        }else{
            const updateCourse = await Course.findByIdAndUpdate(id,req.body);
            res.status(200).json({updateCourse});
        }
    } catch (error) {
        res.status(500).json({message:message.error})
    }
}

const deleteCourse = async(req,res)=>{
    try {
        const {id}= req.params
        const exists = await Course.findById(id)
        if(!exists){
            res.status(404).json({message:`the course with id ${id} doesn't exisit`});
        }else{
            const course = await Course.findByIdAndDelete(id)
            res.status(200).json({message:`the user with id ${id} has been deleted`});
        }
    } catch (error) {
       res.status(500).json({message:message.error}) 
    }
}

module.exports={
    getCourses,getCourse,createCourse,updateCourse,deleteCourse
}