import axios from "axios";
const axiosBase = (token: string | undefined) => {
  const headers = token
    ? {
        Accept: "*/*",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      }
    : {
        Accept: "*/*",
        "Content-Type": "application/json",
      };
  const baseLink = axios.create({
    baseURL: "http://localhost:8000/",
    headers,
  });

  return baseLink;
};

export default axiosBase;
