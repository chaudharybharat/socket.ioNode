const express=require('express');
const app =express();
const path=require('path');
const http=require('http').Server(app);
const port=process.env.port || 8080;

//attached http server to the socket.io
const io=require('socket.io')(http);




//route
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'src/index.html'))
 //res.json("get request");
});

//create a new connection
io.on('connection',socket=>{
console.log("A user connected");

socket.on('disconnect',()=>{
    console.log("A user diconnected");
})
socket.on("message",msg=>{
console.log("Client messaeg:"+msg);
});

// emit event
socket.emit("server","Receive From Server")
socket.emit("server1","Receive From Server second")

});




http.listen(port,()=>{
    console.log('app listeing on port ${port}');
})