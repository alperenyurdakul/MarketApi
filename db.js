const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.dbUrl,{useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false})
.then(()=>{
    
})
.catch((err)=>{
    console.log("error",err);
});