import axios from "axios";

const useAxios = () => {
  const token = localStorage.getItem("jwt");

  const axiosInstance = axios.create({
    baseURL: "http://localhost:5454/api",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return axiosInstance;
};

export default useAxios;
