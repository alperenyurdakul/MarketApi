const express = require('express');
const productRouter = require('./routers/productRouter');
const categoryRouter = require('./routers/categoryRouter');
const userRouter = require('./routers/userRouter');
const orderRouter = require('./routers/orderRouter');
const errorHandler = require('./helpers/error-handler');
const authJwt = require('./helpers/jwt');
const cors = require('cors');
require('dotenv').config();

const app = express();

require('./db');

app.use(cors());
app.options('*',cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));;

//Use router
app.use('/api/v1/products',productRouter);
app.use('/api/v1/categories',categoryRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/orders',orderRouter);


app.use(authJwt());
// app.use(errorHandler);
app.use('/public/uploads',express.static(__dirname + '/public/uploads'));





app.listen(3000,()=>{
    console.log("Listening in Port ");
});
  


