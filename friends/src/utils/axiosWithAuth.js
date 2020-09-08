import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    //baseURL: "http://localhost:5000/api",
    baseURL: "http://localhost:5000",
    headers: {
      //Authorization: token
      Authorization: 'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ'
    }
  });
};
