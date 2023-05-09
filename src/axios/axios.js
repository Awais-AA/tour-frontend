import axios from "axios";


export default axios.create({
    baseURL:'http://localhost:6001/api/v1/',
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
    
})
export const privateAxios=axios.create({
    baseURL:'http://localhost:5000/',
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
})

