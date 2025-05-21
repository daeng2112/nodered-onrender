const http = require("http");
const express = require("express");
const RED = require("node-red");

const app = express();
const server = http.createServer(app);

// Konfigurasi Node-RED
const settings = {
  httpAdminRoot: "/red",
  httpNodeRoot: "/api",
  userDir: "./.nodered/",
  functionGlobalContext: {}
};

RED.init(server, settings);

// Serve editor UI
app.use(settings.httpAdminRoot, RED.httpAdmin);
// Serve node HTTP endpoint
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(process.env.PORT || 3000, () => {
  console.log("Node-RED running");
});

RED.start();

