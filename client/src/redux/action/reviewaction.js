import axios from "axios";

export const createreviewaction=(token,review)=>async(dispatch)=>{
    try{
        await axios.post("http://localhost:8080/review/new",review,{
            headers: {
              authorization: `Bearer ${token}`,
            },
          })
          
    }
    catch(error){console.log(error)}

}
export const deletereviewaction=(token,id)=>async(dispatch)=>{
  try{
      await axios.delete(`http://localhost:8080/review/delete/${id}`,{
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        
  }
  catch(error){console.log(error)}

}