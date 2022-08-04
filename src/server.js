let {
  grpc,
  chat,
  PORT
} = require('./lib/configuration')

function sendMessage(call, callback) {
  let returnData = { messageSent: true }
  console.log(returnData)
  callback(null, returnData);
}

let server = new grpc.Server();

server.addService(chat.Chat.service, {
  sendMessage
});

server.bindAsync(PORT, grpc.ServerCredentials.createInsecure(), () => {
  server.start();
});