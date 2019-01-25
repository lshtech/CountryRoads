import * as http from "http";
// ReSharper disable once CommonJsExternalModule
var express = require("express");

class CrServer {
  private header: any = { "Content-Type": "text/plain" };
  private port = process.env.PORT || 1338;
  private app = express();
  
  constructor() {
    //const server = http.createServer(this.onRequest);
    //server.listen(this.port);
    
    
    this.app.listen(this.port);
    this.app.get("/", this.onRequest);
    

    console.log("Server starting...");
  }

  private onRequest(request, response): void {
    response.writeHead(200, this.header);
    response.end("Hellow World!!!");
  }
}

var crServer = new CrServer();



