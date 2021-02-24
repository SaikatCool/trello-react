import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import { IOC_CONTAINER } from "./src/config/ioc-config";
import express from "express";
import { config } from "./src/config/config";
import dotenv from "dotenv";
import * as bodyParser from 'body-parser';

dotenv.config();

let server = new InversifyExpressServer(IOC_CONTAINER);

server.setConfig((application) => {
  application.use(bodyParser.urlencoded({
    extended: true
  }));

  // Request can have max 5 MB of payload
  application.use(bodyParser.json({limit: '5mb'}));
  application.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
  
  application.use((req, res, next) => {

    
    // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
    

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    // Expose the response header to the client
    res.setHeader('Access-Control-Expose-Headers', 'Authorization');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    next();
  });
});
let app = server.build();

app.listen(config.PORT, () => {
    console.log("backend started at port " + config.PORT);
})

export { server };
  