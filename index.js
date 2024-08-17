const express = require('express');
const app = express();
const port = 3000;
const db = require('./models/mongodb.js')
const User = require('./models/user.model.js')
const UserRouter = require('./router/user.router.js')
const courseRouter = require('./router/course.router.js');
const productRouter = require('./router/product.router.js');
const orderRouter = require('./router/order.router.js')

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/user',UserRouter);
app.use('/api/course',courseRouter);
app.use('/api/product',productRouter);
app.use('/api/order',orderRouter);


app.listen(port,()=>{
    console.log(`You are successfull connected on port ${port}`);
})