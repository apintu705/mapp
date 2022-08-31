import axios from 'axios';
import {API_NOTIFICATION_MESSAGES , SERVICE_URLS} from "../const/config"
import { getAccessToken, getRefreshToken, setAccessToken, getType } from '../utils/utils';




const API_URL="http://localhost:8080"
const axiosinstance=axios.create({
    baseURL:API_URL,
    timeout:10000,
    headers: {
        "content-type": "application/json",
    }
})

axiosinstance.interceptors.request.use(
    function(config){
        return config
    },
    function(error){
        return Promise.reject(error)
    }
)
axiosinstance.interceptors.response.use(
    function(response){
        return processResponse(response)
    },
    function(error){
        return Promise.reject(processerror(error))
    }
)


const processResponse =(response)=>{
    if(response?.status === 200){
        return {isSuccess:true,data:response.data}
    }
    else{
        return {isfaliure:true, status:response.status,msg:response.message,code:response.code}
    }
}

const processerror =(error)=>{
    if(error.response){
        return {
            iserror:true,
            msg:API_NOTIFICATION_MESSAGES.responsefailure,
            code:error.response.status
        }
    }
    else if(error.request){
        return {
            iserror:true,
            msg:API_NOTIFICATION_MESSAGES.requestfailure,
            code:""
        }
    }
    else{
        return {
            iserror:true,
            msg:API_NOTIFICATION_MESSAGES.networkfailure,
            code:""
        }
    }
}

const API = {};

for(const [key, value] of Object.entries(SERVICE_URLS)){
    API[key]=(body, showUploadProgress, showDownloadProgress)=>
        axiosinstance({
            method: value.method,
            url: value.url,
            data: value.method === 'DELETE' ? '' : body,
            responseType: value.responseType,
            headers: {
                authorization: getAccessToken(),
            },
            TYPE: getType(value, body),
            onUploadProgress: function(progressEvent) {
                if (showUploadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showUploadProgress(percentCompleted);
                }
            },

            onDownloadProgress: function(progressEvent) {
                if (showDownloadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showDownloadProgress(percentCompleted);
                }
            }
        })
    
}

export {API}