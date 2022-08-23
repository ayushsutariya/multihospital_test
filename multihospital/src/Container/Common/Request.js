import axios from "axios";
import { BASE_URL } from "../../Base_url";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 4000,
    headers: {
      'Content-Type': 'application/json',
    }
  });

  export const Axios_Request = (config) => {
    axiosInstance.request(config)
  }

  export const getRequest = (path) => {
    return Axios_Request ({
        url: path,
        method :'GET'
    })
  }

  export const postRequest = (path , data) => {
    return Axios_Request ({
      url : path,
      method : 'POST',
      data :  data
    })
  }