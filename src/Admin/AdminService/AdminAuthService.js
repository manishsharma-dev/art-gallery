import axios from "axios";

const apiUrl = process.env.REACT_APP_API_ENDPOINT;

export async function adminLoginService(loginRequest) {
  return axios.post(`${apiUrl}auth/login`, loginRequest);
}
