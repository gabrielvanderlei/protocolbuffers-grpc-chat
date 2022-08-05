let {
  grpc,
  chat,
  PORT
} = require('./lib/configuration')

let users = [];

function textToAll(message){
  users.map(userCall => {
    userCall.write({ message })
  })
}

function SendMessage(call, callback) {
  textToAll(`${call.request.user}: ${call.request.message}`)
}

function MessageStream(call, callback) {
  users.push(call)
  textToAll(`${call.request.user} entered in the room`);

  call.on("cancelled", () => {
    textToAll(`${call.request.user} has left the room`);
  })
}

let server = new grpc.Server();

server.addService(chat.Chat.service, {
  SendMessage,
  MessageStream
});

server.bindAsync(PORT, grpc.ServerCredentials.createInsecure(), () => {
  server.start();
});