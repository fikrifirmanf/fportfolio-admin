import axios from 'axios';

const axiosClient = axios.create();
 axiosClient.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
 axiosClient.defaults.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
 }
//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = true;


export async function getAll(){
    return await axiosClient.get(`/posts`).then(response => response);
}
export async function getById(id){
    return await axiosClient.get(`/posts/${id}`).then(response => response);
}

export async function update(id,payload){
    return axiosClient.patch(`/posts/${id}`,payload).then(response => response)
}
