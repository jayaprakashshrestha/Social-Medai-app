import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RedirectionLayer = (props: { children: any }) => {
  const users = useSelector((state) => state.users);
  const navigation = useNavigate();

  useEffect(() => {
    if (users.isLoggedin) {
      navigation("/");
    }
  }, [navigation, users.isLoggedin]);

  return <>{props.children}</>;
};

export default RedirectionLayer;
