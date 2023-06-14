import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthenticationLayer = (props: { children: any }) => {
  const users = useSelector((state) => state.users);
  const navigation = useNavigate();

  useEffect(() => {
    if (!users.isLoggedin) {
      navigation("/login");
    }
  }, [navigation, users.isLoggedin]);

  return <>{props.children}</>;
};

export default AuthenticationLayer;
