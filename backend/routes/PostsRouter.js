import { Router } from "express";
import { GetAllPosts, PostPosts } from "../Controller/PostController.js";
import { add_data } from "../seeders/Posts.js";
import isUser from "../middleware/isUser.middleware.js";

const PostRouter = Router();

PostRouter.get("/", GetAllPosts);
PostRouter.post("/", isUser, PostPosts);
PostRouter.get("/seed/posts", add_data);

export default PostRouter;
