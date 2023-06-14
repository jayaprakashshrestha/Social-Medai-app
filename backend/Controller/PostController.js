import Mongoose from "mongoose";
import Posts from "../database/Schema/Posts.schema.js";

export const GetAllPosts = async (req, res) => {
  try {
    const posts = await Posts.find({}).populate("postedBy", "-password");
    res
      .status(200)
      .send({ success: true, data: posts, message: "Posts has been Fetched" });
  } catch (e) {
    res.status(500).send({ success: false, data: null, message: e.message });
  }
};

export const PostPosts = async (req, res) => {
  console.log(req.body.name, req.body.description);
  try {
    const { name, description } = req.body;

    let post = new Posts({
      name,
      description,
      time: new Date().toString(),
      like: 0,
      postedBy: new Mongoose.Types.ObjectId(req.user.id),
    });

    await post.save();
    const posted = await Posts.findOne({
      name,
      description,
      postedBy: new Mongoose.Types.ObjectId(req.user.id),
    }).populate("postedBy", "-password");

    res
      .status(200)
      .send({ success: true, data: posted, message: "Post Has been added." });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, data: null, message: error.message });
  }
};
