import axios from 'axios';

const headers={
    Accept:'application/json',
    'Content0Type':'application/json'
}
const axiosInstance =axios.create({
    baseURL:"http://localhost:3000/",
    timeout:60*1000,
    headers,
})
export default axiosInstance;