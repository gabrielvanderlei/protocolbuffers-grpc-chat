let grpc = require('@grpc/grpc-js');
let protoLoader = require('@grpc/proto-loader');
let PROTO_PATH = './proto/chat.proto';

let packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

let PORT = '0.0.0.0:50051';
let chat = grpc.loadPackageDefinition(packageDefinition).chat;

module.exports = {
    packageDefinition,
    chat,
    grpc,
    PORT
}