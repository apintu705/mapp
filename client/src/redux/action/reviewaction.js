import axios from "axios";

export const createreviewaction=(token,review)=>async(dispatch)=>{
    try{
        let {data}=await axios.post("http://localhost:8080/review/new",review,{
            headers: {
              authorization: `Bearer ${token}`,
            },
          })
          console.log(data)
    }
    catch(error){console.log(error)}

}