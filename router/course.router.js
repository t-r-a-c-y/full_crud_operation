const express =require('express');
const router = express.Router();
const {getCourses,getCourse,createCourse,updateCourse,deleteCourse}=require('../controller/course.controller.js')

router.get('/',getCourses);
router.get('/:id',getCourse);
router.post('/',createCourse);
router.put('/:id',updateCourse);
router.delete('/:id',deleteCourse)
module.exports = router;