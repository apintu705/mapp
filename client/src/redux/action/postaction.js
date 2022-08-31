import axios from "axios";


export const createpostaction=(token,formdata)=>async(dispatch)=>{
    
    dispatch({type:"CREATE_POST_START"})

    try{
        const {data}=await axios.post("http://localhost:8080/create",formdata,{
            headers: {
              authorization: `Bearer ${token}`,
            },
          })
        dispatch({type:"CREATE_POST_SUCCESS",data:data})
    }
    catch(error){
        console.log(error);
        dispatch({type:"CREATE_POST_FAIL"})
    }
    
}

export const getallpostaction=(token)=>async(dispatch)=>{
  dispatch({type:"GET_POST_START"})

  try{
      const {data}=await axios.get("http://localhost:8080/posts",{
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      dispatch({type:"GET_POST_SUCCESS",data:data})
  }
  catch(error){
      console.log(error);
      dispatch({type:"GET_POST_FAIL"})
  }
  
}