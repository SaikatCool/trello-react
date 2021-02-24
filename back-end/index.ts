import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import { IOC_CONTAINER } from "./src/config/ioc-config";
import express from "express";
import { config } from "./src/config/config";
import dotenv from "dotenv";

dotenv.config();

let server = new InversifyExpressServer(IOC_CONTAINER);

server.setConfig((application) => {
    application.use(express.urlencoded({
      extended: true
    }));
    application.use(express.json());
  });

let app = server.build();

app.listen(config.PORT, () => {
    console.log("backend started at port " + config.PORT);
})

export { server };
  