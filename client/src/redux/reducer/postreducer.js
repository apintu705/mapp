

export const postreducer=(state={post:null,loading:false,error:false},action) => {
    switch (action.type) {

        case "CREATE_POST_START":
        case "GET_POST_START":
            return {
                ...state,
                loading:true, 
                error:false
            }
        
        case "CREATE_POST_SUCCESS":
            return {
                ...state,
                loading:false, 
                error:false
            }

        case "GET_POST_SUCCESS":
            return {
                    ...state,
                    post:action.data,
                    loading:false, 
                    error:false
            }
    

        case "CREATE_POST_FAIL":
        case "GET_POST_FAIL":    
            return {
                ...state,
                loading:false, 
                error:true,
            }
        

        default:
        return {...state}
    }
}