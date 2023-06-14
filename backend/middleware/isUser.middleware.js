import { verifyToken } from "../Controller/UserController.js";
import Users from "./../database/Schema/Users.schema.js";

const isUser = (req, res, next) => {
  const BearerToken = req.headers["authorization"];

  if (!BearerToken) {
    res.send(noTokenResponse);
    return;
  }
  const token = splitToken(BearerToken);

  console.log(token);

  if (!token) {
    res.status(498).send(noTokenResponse);
    return;
  }
  try {
    const { iat, exp, ...rest } = verifyToken(token);

    console.log(rest);

    const UserInDatabase = Users.findOne({ ...rest });

    if (!UserInDatabase) {
      res.status(498).send({
        error: true,
        status: 498,
        message: "User is not correct  ,Invalid Token: Login again",
      });
      return;
    }
    req.user = { iat, exp, ...rest };
    next();
  } catch (e) {
    console.log(e);
    res.status(498).send({
      error: true,
      status: 498,
      message: "Could not verify the user , Please login again",
    });
    return;
  }
};

const splitToken = (bearer) => bearer?.split(" ")[1] || null;

const noTokenResponse = {
  error: true,
  status: 498,
  message: "Could not verify the user , No token: Login again",
};
export default isUser;
