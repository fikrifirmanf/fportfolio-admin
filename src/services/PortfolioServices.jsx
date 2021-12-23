import axios from 'axios';

const axiosClient = axios.create();
 axiosClient.defaults.baseURL = 'http://localhost:3001/api'
 axiosClient.defaults.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
 }
//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

// axiosClient.defaults.withCredentials = true;


export async function getAll(){
    return await axiosClient.get(`/portfolio`).then(response => response);
}
export async function getById(id){
    return await axiosClient.get(`/portfolio/${id}`).then(response => response);
}

export async function update(id,payload){
    return axiosClient.patch(`/portfolio/${id}`,payload).then(response => response)
}
export async function postRequest(payload) {
    return await axiosClient.post(`/portfolio`, payload).then(response => response);
  }
export async function deleteRequest(id) {
    return await axiosClient.delete(`/portfolio/${id}`).then(response => response);
  }
