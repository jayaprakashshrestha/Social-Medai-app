import bodyParser from "body-parser";
import express from "express";
import PostRouter from "./routes/PostsRouter.js";
import connectDatabase from "./database/database_connection.js";
import dotenv from "dotenv";
import cors from "cors";
import UserRouter from "./routes/UsersRouter.js";

dotenv.config();
const app = express();

connectDatabase();

app.use(bodyParser.json());
app.use(cors());

app.use("/posts", PostRouter);
app.use("/users", UserRouter);

app.listen(8000, () => {
  console.log("Server Listenning");
});
