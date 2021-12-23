import axios from "axios";

export default axios.interceptors.response.use(function (response) {
    //Dispatch any action on success
    if(response.status == 200){
        console.log("eajseasej")
    }
    return response;
  }, function (error) {
      if(error.response.status === 401) {
       //Add Logic to 
             //1. Redirect to login page or 
             //2. Request refresh token
             console.log('ek')
      }
    return Promise.reject(error);
  });