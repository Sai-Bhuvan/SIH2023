import {createServer} from "http";
import {Server} from "socket.io";
import {v4 as uuidv4} from "uuid";

const httpServer = createServer();
const io = new Server(httpServer,{
    cors:{
        origin:"http://localhost:3000",
        methods: ["GET","POST"],
    },
});

io.use((socket,next) => {
    const username = socket.handshake.auth.username;
    if(!username) {
        return next(new Error("Invalid username"));
    }

    socket.username = username;
    socket.userId = uuidv4();
    next();
});

io.on("connection", async(socket)=>{
    //all connected users
    const users = [];
    for(let [id,socket] of io.of("/").sockets) {
        users.push({
            userId : socket.userId,
            username: socket.username,
        });
    }

    //all users event
    socket.emit("users", users);

    //connected user details
    socket.emit("session",{ userId: socket.userId, username: socket.username});

    //new user events
    socket.broadcast.emit("user connected", { userId: socket.userId, username: socket.username });

    //new message event
    socket.on("new message",(message) => {
        socket.broadcast.emit("new message",{
            userId: socket.userId,
            username: socket.username,
            message,
        })
    })
});

console.log("listening");
httpServer.listen(process.env.PORT|| 4000);
