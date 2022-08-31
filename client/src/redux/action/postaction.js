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

export const getallpostaction=(token,category)=>async(dispatch)=>{
  dispatch({type:"GET_POST_START"})

  try{
    if(category){
      const {data}=await axios.get("http://localhost:8080/posts",{
        params:{category:category},
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      dispatch({type:"GET_POST_SUCCESS",data:data})
    
    }else{
      const {data}=await axios.get("http://localhost:8080/posts",{
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      dispatch({type:"GET_POST_SUCCESS",data:data})
    }
      
  }
  catch(error){
      console.log(error);
      dispatch({type:"GET_POST_FAIL"})
  }
  
}

export const updatepostaction=(token,formdata,id)=>async(dispatch)=>{
    
  dispatch({type:"CREATE_POST_START"})

  try{
      const {data}=await axios.put(`http://localhost:8080/update/${id}`,formdata,{
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

export const deletepostaction=(token,id)=>async(dispatch)=>{
    

  try{
      await axios.delete(`http://localhost:8080/delete/${id}`,{
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
      
  }
  catch(error){
      console.log(error);
      
  }
  
}