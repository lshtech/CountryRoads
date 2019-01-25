"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
class CrServer {
    constructor() {
        //const server = http.createServer(this.onRequest);
        //server.listen(this.port);
        this.header = { "Content-Type": "text/plain" };
        this.port = process.env.PORT || 1338;
        var app = express();
        app.listen(this.port);
        app.get('/', this.onRequest);
        console.log("Server starting...");
    }
    onRequest(request, response) {
        response.writeHead(200, this.header);
        response.end("Hellow World!!!");
    }
}
var crServer = new CrServer();
//# sourceMappingURL=server.js.map