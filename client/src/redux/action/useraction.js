import axios from "axios";


export const signupaction=(formdata)=>async(dispatch)=>{
    
    dispatch({type:"AUTH_START"})

    try{
        const {data}=await axios.post("http://localhost:8080/signup",formdata)
        dispatch({type:"AUTH_SUCCESS",data:data})
    }
    catch(error){
        console.log(error);
        dispatch({type:"AUTH_FAIL"})
    }
    
}
export const loginaction=(formdata)=>async(dispatch)=>{
    
    dispatch({type:"AUTH_START"})

    try{
        const {data}=await axios.post("http://localhost:8080/login",formdata)
        dispatch({type:"AUTH_SUCCESS",data:data})
    }
    catch(error){
        console.log(error);
        dispatch({type:"AUTH_FAIL"})
    }
    
}