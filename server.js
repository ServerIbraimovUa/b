const io = require("socket.io")(3001, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});
io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("send-message", (message) => {
        io.emit("receive-message", message);
    });
});
