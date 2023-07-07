# socket.ioNode
Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server. It is built on top of the WebSocket protocol and provides additional guarantees like fallback to HTTP long-polling or automatic reconnection
# environmental
To get started with developing using the Socket.IO, you need to have Node and npm (node package manager) installed. If you do not have these, head over to Node setup to install node on your local system. Confirm that node and npm are installed by running the following commands in your terminal.
```
node --version
npm --version
You should get an output similar to −
v14.17.0

```
** Open your terminal and enter the following in your terminal to create a new folder and enter the following commands − **

 mkdir socket-project
 cd socket-proect
 npm init -y //this commond create defualt package json file  

	**One final thing is that we should keep restarting the server. When we make changes, we will need a tool called nodemon. To install nodemon, open your terminal and enter the following command**
```
npm i express nodemon socket.io

```
below change for pacakge json file
```
- ![#f03c15]
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
 `#f03c15`

```



