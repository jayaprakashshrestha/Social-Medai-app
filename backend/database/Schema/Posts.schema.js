import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  like: {
    type: Number,
    required: true,
  },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  //   comments: [{ body: "string", by: mongoose.Schema.Types.ObjectId }],
});

const Posts = mongoose.model("posts", PostSchema);

export default Posts;
