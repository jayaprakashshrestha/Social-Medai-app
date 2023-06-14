import Users from "../database/Schema/Users.schema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (user) => {
  return jwt.sign(user, process.env.SECRET_JSON_WEB_TOKEN, {
    expiresIn: "1d",
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET_JSON_WEB_TOKEN);
};

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(+process.env.SALT_BCRYPT);
  const encrypted_password = await bcrypt.hash(password, salt);
  return encrypted_password;
};

const comparePassword = async (password, encryptPassword) => {
  const is_equal = await bcrypt.compare(password, encryptPassword);
  return is_equal;
};

const VerifyLogin = async (username) => {
  const user = await Users.findOne({ username });
  if (!user) return;
  return user;
};

export const LoginPost = async (req, res) => {
  let { username, password } = req.body;
  const user = await VerifyLogin(username);

  if (!user) {
    res.send({ error: true, status: 404, message: "User Not Found " });
    return;
  }

  const isSamePassword = await comparePassword(password, user.password);

  if (!isSamePassword) {
    res.send({
      error: true,
      status: 404,
      message: "Login error, Password dont match",
    });
    return;
  }

  const token = generateToken({
    username: user.username,
    password: user.password,
    id: user.id,
  });

  res.send({
    error: false,
    status: 200,
    message: "User Found",
    data: { token },
  });
};

export const RegisterPost = async (req, res) => {
  const { username, password } = req.body;

  const gotUser = await VerifyLogin(username);

  if (gotUser) {
    res.send({
      error: true,
      status: 500,
      message: "User Already Creted",
      data: { ...gotUser },
    });
    return;
  }

  const encrypted_Password = await encryptPassword(password);

  const user = new Users({ username, password: encrypted_Password });

  user.save().then((response) => {
    res.send({
      error: false,
      status: 200,
      message: "User Created",
      data: { ...user },
    });
  });
};
