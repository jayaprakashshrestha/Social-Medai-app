import { Router } from "express";
import { LoginPost, RegisterPost } from "../Controller/UserController.js";

const UserRouter = Router();

UserRouter.post("/login", LoginPost);
UserRouter.post("/register", RegisterPost);

export default UserRouter;
