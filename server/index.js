const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`입장했습니다. : ${socket.id}`);

  socket.on("join_room", (result) => {
    socket.join(result);
    console.log(`user join :${socket.id} room: ${result}`);
  });

  socket.on("set_message", (data) => {
    console.log(data);
    socket.to(data.room).emit("get_message", data);
  });

  socket.on("disconnect", () => {
    console.log("user out", socket.id);
  });
});

server.listen(process.env.PORT || 5000, () => {
  console.log("server on");
});
