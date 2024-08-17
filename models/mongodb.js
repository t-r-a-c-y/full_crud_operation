const mongoose = require('mongoose');
const db= mongoose.connect("mongodb+srv://tracytesi69:xDspiNLArWkR9eTh@cluster0.okxo2fd.mongodb.net/",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("You are connected to the database");
}).catch((error)=>{
    console.log(`there is an error ${error}`);
})
module.exports = db;