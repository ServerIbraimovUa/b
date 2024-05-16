const io = require("socket.io")(3001, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});
io.on("connection", (socket) => {
    socket.on("send-message", (message, callback) => {
        try {
            io.emit("orders", message);

            callback({ status: "success" });
        } catch (error) {
            console.error("Error processing message:", error);
            callback({ status: "error", error: error.message });
        }
    });
});
