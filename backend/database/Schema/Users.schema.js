import { Schema, model } from "mongoose";

const UsersSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Users = model("users", UsersSchema);

export default Users;
