const http = require("http");
const app = require("../main").app;
const port = '10000';

const server = http.createServer(app.callback());

server.listen(port);

server.on("listening", () => {
  console.log("http监听端口", port);
});

server.on("error", () => {
  console.error("http监听端口服务错误", port);
});