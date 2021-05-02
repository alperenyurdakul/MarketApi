const express = require("express");
const productRouter = require("./routers/productRouter");
const categoryRouter = require("./routers/categoryRouter");
const userRouter = require("./routers/userRouter");
const orderRouter = require("./routers/orderRouter");
const errorHandler = require("./helpers/error-handler");
const authJwt = require("./helpers/jwt");
const cors = require("cors");
require("dotenv").config();
var http = require("http");

const app = express();

require("./db");

app.use(cors());
app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Use router
app.use("/api/v1/products", productRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/orders", orderRouter);

app.use(authJwt());
// app.use(errorHandler);
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));

// app.listen(5000,()=>{
//     console.log("Listening in Port ");
// });

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

var server = http.createServer(app);

var port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
console.log("Listening in Port ");

function onListening() {
  var addr = server.address();
}

module.exports = app;
