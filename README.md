# This example is ioSocket server and user side
below trigger event
- User connect and disconnect socket
- Server trigger in user side (if you want to trigger server event,so you just file change and save whie you trigger event) 
- User trigger in server
# Socket.ioNode
Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server. It is built on top of the WebSocket protocol and provides additional guarantees like fallback to HTTP long-polling or automatic reconnection
# Environmental
To get started with developing using the Socket.IO, you need to have Node and npm (node package manager) installed. If you do not have these, head over to Node setup to install node on your local system. Confirm that node and npm are installed by running the following commands in your terminal.
```
node --version
npm --version
You should get an output similar to −
v14.17.0

```
 - Open your terminal and enter the following in your terminal to create a new folder and enter the following commands − 

 mkdir socket-project
 cd socket-proect
 npm init -y //this commond create defualt package json file  

- One final thing is that we should keep restarting the server. When we make changes, we will need a tool called nodemon. To install nodemon, open your terminal and enter the following command

```
npm i express nodemon socket.io

```
below change in pacakge json file
```
default
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
 
change
 "scripts": {
    "start": "nodemon main.js --w"
  },

```
-- create main js file and write below code(this file is server side) 

```
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

```

- Create index html file and write below code(this file is user side) 
create src folder and create there index.html file
(if you useing visual studio code creat html file and type  `!`  and enter to auto generate html code)

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Socket IO</title>
</head>
<body>
    <h1>Get response from the server</h1>
   <button type=""submit" id="submit">Send Message</button>
    <script src="socket.io/socket.io.js"></script>
    <script>

        
        const socket=io();

        socket.on("connect",()=>{
            console.log(socket.id)
        })
        let submit=document.getElementById("submit");
        submit.addEventListener("click",()=>{
           socket.emit("message","hey from client"); 
        });

        socket.on("server",(msg)=>{
           console.log(msg);
        })

        //if you want all emit event listen

        const listener=(eventName,...args)=>{
            console.log(eventName,args);
        }
        socket.onAny(listener);
    </script>
</body>
</html>


```
- Run command and see in terminal event listener:(user do any action you can see in terminal log)
  
```
npm start

```
- Open browser port 8080 and open console, you can see server event listener in console log
  
```
http://localhost:8080/
  
```
-Io socket official site:
[https://socket.io/docs/v3/](https://socket.io/docs/v3/)


- Output

![Screenshot of an output.](https://github.com/chaudharybharat/socket.ioNode/blob/main/output.png)

