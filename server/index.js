const express = require("express");
require("dotenv").config({ path: "./.env" });
const connection = require("./Database/db");
const cookiesSession = require("cookie-session");
const cors = require("cors");
const helmet = require("helmet");
const passport = require("passport");
const googlePassportSetUp = require("./Auth/Passport");
const authRouter = require("./routes/auth");
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(
  cookiesSession({
    name: "session",
    keys: ["Arpit"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
server.use(passport.initialize());
server.use(passport.session());
server.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);
server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send(`API Server started on localhost:${PORT}`);
});

server.use("/auth", authRouter);

const PORT = process.env.PORT || 8080;

server.listen(PORT, async () => {
  await connection;
  console.log("Connected to Database");
  console.log(`🌎 started on http://localhost:${PORT}/`);
});
