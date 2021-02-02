const app = require('express')();
const http = require('http').createServer(app);
const shortid = require('shortid');

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

users = {}
rooms = []

io.on('connection', socket => {
  console.log(`User ${socket.id} connected`);

  socket.on('create', username => {
    const roomId = shortid.generate();
    socket.join(roomId);
    users[socket.id] = username;
    rooms.push(roomId);
    console.log(`${socket.id} joined room ${roomId}`);
    socket.emit('roomId', roomId);
    socket.emit('message', {
      id: 'System',
      sender: 'Sys',
      content: `${username} creted the room`,
      date: Date.now()
    })
  })

  socket.on('join', (id, username) => {
    if(!rooms.includes(id)){
      socket.emit('error', 'Sala não existe')
      return;
    }
    users[socket.id] = username;
    socket.join(id)
    console.log(`${socket.id} joined room ${id}`)
    socket.emit('roomId', id);
    io.in(id).emit('message', {
      id: 'System',
      sender: 'Sys',
      content: `${username} joined the room`,
      date: Date.now()
    })
  })

  socket.on('sendMessage', (msgCont, roomId) => {
    const newMsg = {
      id: socket.id,
      sender: users[socket.id],
      content: msgCont,
      date: Date.now()
    };
    io.in(roomId).emit('message', newMsg)
  })

  socket.on('disconnect', () => {
    delete users[socket.id]
    console.log(`${socket.id} disconnected`)
  })
})

http.listen(9000, () => console.log('🚀 Server up @ http://localhost:9000'));
