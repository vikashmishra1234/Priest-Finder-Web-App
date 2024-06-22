import axios from "axios"
const url = 'http://localhost:5000';

export const registration=async(data)=>{
   
    try {
       
        const res =await axios.post(`${url}/priest/register`,data);
        return res.data;
    } catch (error) {
       
        if (error.response) {
           
            // console.error('Error status:', error.response.status);
            alert(error.response.data.error)
            console.error('Error message:', error.response.data.error);
          }
    }
}
export const priestLogin=async(data)=>{
  
    try {
        const res =await axios.post(`${url}/priest/login`,data);
        return res.data;
    } catch (error) {
        if (error.response) {
           
            console.error('Error message:', error.response.data.error);
            alert(error.response.data.error)
          }
    }
}
export const updateProfile=async(data)=>{
    const config = {
        headers:{
            "Authorization":`vikash ${localStorage.getItem("priestToken")}`
        }
    };
    try {
        const res =await axios.post(`${url}/priest/update`,data,config);
        return res.data;
    } catch (error) {
        console.log(error.message)
        if (error.response) {
       
            console.error('Error message:', error.response.data.error);
            alert(error.response.data.error)
          }
         
    }
}
export const getPriests=async()=>{
   
   
    try {
        const res =await axios.get(`${url}/priests/get`);
        return res.data;
    } catch (error) {
        console.log(error)
        if (error.response) {
           
            console.error('Error message:', error.response.data.error);
            alert(error.response.data.error)
          }
    }
}
export const getProfile=async()=>{
    const config = {
        headers:{
            "Authorization":`vikash ${localStorage.getItem("priestToken")}`
        }
    };
   
    try {
        const res =await axios.get(`${url}/priest/get`,config);
        return res.data;
    } catch (error) {
        if (error.response) {
           
            console.error('Error message:', error.response.data.error);
            alert(error.response.data.error)
          }
    }
}
export const deleteProfile=async()=>{
    const config = {
        headers:{
            "Authorization":`vikash ${localStorage.getItem("priestToken")}`
        }
    };
    try {
        const res =await axios.delete(`${url}/priest/delete`,config);
        return res.data;
    } catch (error) {
        if (error.response) {
           
            console.error('Error message:', error.response.data.error);
            alert(error.response.data.error)
          }
    }
}
export const phoneExit=async(Phone)=>{
   
    try {
        const res =await axios.get(`${url}/phone/exit?Phone=${Phone}`);
        return res.data;
    } catch (error) {
        if (error.response) {
           
            console.error('Error message:', error.response.data.error);
            alert(error.response.data.error);
         
          }
    }
}
export const getFeedback=async(priestId)=>{
   
    try {
        const res =await axios.get(`${url}/feedback/get?priestId=${priestId}`);
        return res.data;
    } catch (error) {
        if (error.response) {
           
            console.error('Error message:', error.response.data.error);
         
          }
    }
}
export const addFeedback=async(data)=>{
   
    try {
        const res =await axios.post(`${url}/add/feedback`,data);
        return res.data;
    } catch (error) {
        if (error.response) {
           
            console.error('Error message:', error.response.data.error);
            alert(error.response.data.error)
          }
    }
}