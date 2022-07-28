const express = require("express");
require("dotenv").config({ path: "./.env" });
const connection = require("./Database/db");
const cookiesSession = require("cookie-session");
const cors = require("cors");
const helmet = require("helmet");
const passport = require("passport");
const googlePassportSetUp = require("./Auth/Passport");
const authRouter = require("./routes/auth");
const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/messages");
const socket = require("socket.io");
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
server.use("/api/auth", authRoutes);
server.use("/api/messages", messageRoutes);

const PORT = process.env.PORT || 8080;

const NEW_SERVER = server.listen(PORT, async () => {
  await connection;
  console.log("Connected to Database");
  console.log(`🌎 started on http://localhost:${PORT}/`);
});
const io = socket(NEW_SERVER, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});
