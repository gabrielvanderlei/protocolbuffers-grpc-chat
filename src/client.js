try{
  let {
    grpc,
    chat,
    PORT
  } = require('./lib/configuration')

  let readline = require('readline');

  let rl = readline.createInterface(process.stdin, process.stdout);
  let client = new chat.Chat(PORT, grpc.credentials.createInsecure());

  console.log('Hi! Welcome to chat.');
  console.log('Please tell me your name');

  rl.question('What is your username? ', (username) => {
    loadChat(username)
  });

  let loadChat = (user) => {
    console.log('Ok! You can send and receive messages now.');
    
    const channel = client.MessageStream({ user })
    channel.on("data", (data) => console.log('[SERVER] ' + data.message))

    rl.on('line', (message) => {
      client.SendMessage({ user, message },  function (err, response) {
        if(!err){
          console.log('Answer:', response.answer);
        } else {
          console.log('Error processing data')
        }
      });
    });
  }
} catch(e){
  console.log('An error has happened, probably the server has been desactivated.')
}