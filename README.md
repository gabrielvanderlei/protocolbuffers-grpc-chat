# protocolbuffers-grpc-chat
Chat desenvolvido utilizando o Protocol Buffers (tecnologia desenvolvida pela Google para transferência de dados) e o gRPC (Google Remote Procedure Call), criado pela Google para execução de funções de modo remoto.

## Início rápido com gRPC
Se quiser mais informações sobre gRPC pode consultar o seguinte link: https://www.grpc.io/docs/languages/node/quickstart/

## Exemplo de uso
### Cliente / Servidor
Instale as dependências e acesse a pasta contendo os scripts

```bash
npm i
cd src
```

Inicie o servidor

```bash
node server.js
```

Inicie o cliente

```bash
node client.js
```


## Configurações
No arquivo configuration.js você pode modificar as seguintes variáveis:
* PORT - Porta do servidor gRPC