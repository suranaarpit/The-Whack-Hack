const express = require("express");
const connection = require("./Database/db");
const cors = require("cors");
const helmet = require("helmet");
const authRouter = require("./routes/auth.routes");
const server = express();
require("dotenv").config()
const PORT = process.env.PORT
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(helmet());
server.use(express.json());

server.use("/auth",authRouter)
server.get("/", (req, res) => {
  res.send(`API Server started on localhost:${PORT}`);
});






server.listen(PORT, async () => {
    try{
      await connection;
      console.log("Connected to Database");
      console.log(`🌎 started on http://localhost:${PORT}/`);
    }
    catch(err) {
      console.log(err, "error while starting server");
    }
});
