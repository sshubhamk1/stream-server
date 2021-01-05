import express, { Application, Router, Request, Response } from "express";
import bodyParser from "body-parser";
import swaggerUI from "swagger-ui-express";
import swaggerjsDoc from "swagger-jsdoc";
import cors from "cors";
// exporting constants
import { config } from "./Engine/Config/constant";

// express application
const app: Application = express();

// setting up application to accept JSON and urlencoded requests
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// swagger implementation
const swaggerInfo: swaggerUI.JsonObject = {
  info: {
    version: "1.0.0",
    title: "Generic-typescript Server",
    description: "Generic typescript server backend APIs",
    license: "MIT",
    url: "https://opensource.org/licenses/MIT",
  },
  host: `${config.HOST}:${config.PORT}`,
  basepath: "/",
};
let options: any = {
  swaggerDefinition: swaggerInfo,
  apis: [
    `src/app.${config.ENV}`,
    `src/Public/Routes/*.${config.ENV}`,
    `src/RoleUser/Routes/*.${config.ENV}`,
  ],
  basepath: "/",
};

const swaggerSpec = swaggerjsDoc(options);

// using swagger at api docs
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// homepage route
app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ error: false, msg: "Hello to Shubham world" });
});

// exporting routes for different roles
import publicRoutes from "./Public";
import userRoutes from "./RoleUser";
// creating router for express app
const router: Router = Router();

// giveing routes to different roles
router.use("/public", publicRoutes);
router.use("/user", userRoutes);

// giving route path for router in express app
app.use("/api", router);

// starting  server and storing result for socket communication
const server = app.listen(config.PORT, () => {
  console.log(` app listening on port ${config.PORT}`);
});
