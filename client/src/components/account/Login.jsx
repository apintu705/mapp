import React from 'react'
import {TextField, Box, Button, Typography, styled} from "@mui/material"
import { useState,useContext } from 'react';
import { API } from '../../service/api';
import {DataContext} from "../../context/Dataprovider"
import {useNavigate} from "react-router-dom"




export const Login = ({setisAuth}) => {
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    const navigate=useNavigate()
    const { setAccount } = useContext(DataContext);

    const [account,setaccount]=useState("login")
    const [signup,setsignup]=useState({
        name:"",
        username:"",
        password:"",
    })
    const [logindata,setlogindata]=useState({
        username:"",
        password:"",
    })
    const [error,setError] = useState(false)

    const togglesignup=(e)=>{
        setaccount(e)
    }

    const oninputchange=(e)=>{
        setsignup({...signup,[e.target.name]:e.target.value})
    }
    const onvaluechange=(e)=>{
        setlogindata({...logindata,[e.target.name]:e.target.value})
    }
    const login=async()=>{
        
        try{
            let response = await API.userLogin(logindata)
        
        if(response.isSuccess){
            setError(false)
            sessionStorage.setItem("accesstoken",`Bearer${response.data.accesstoken}`)
            sessionStorage.setItem("refresstoken",`Bearer${response.data.refresstoken}`)
            setisAuth(true)
            setAccount({username:response.data.username,name:response.data.name})
            navigate("/")
        }
        }
        catch(e){
            
            setError(true)
        }
        
        
    }
    const signupuser=async()=>{
        
        try{
            let response = await API.userSignup(signup)
        
        if(response.isSuccess){
            
            setsignup({
                name:"",
                username:"",
                password:"",
            })
            setError(false)
            setaccount("login")
        }
        }
        catch(e){
            
            setError(true)
        }
        
        
    }


  return (
    <Component>
        <Box>
            <Image src={imageURL} alt="Lgin"/>

            {account==="login"?(
            <Wrapper>
                <TextField  variant="standard"
                onChange={(e)=>onvaluechange(e)}
                name="username"
                label='Enter Username'/>
                <TextField variant="standard"onChange={(e)=>onvaluechange(e)}
                name="password" label='Enter Password'/>

                {error?<Error>something went wrong!!! please try again</Error>:""}

                <LoginButton onClick={(e)=>login()} variant="contained">Login</LoginButton>
                <Text style={{textAlign: 'center'}}>OR</Text>
                <SignupButton onClick={()=>togglesignup("signup")}>Create an account</SignupButton>
            </Wrapper>
            ):(
            <Wrapper>
                <TextField  variant="standard" 
                onChange={(e)=>oninputchange(e)}
                name='name'label='Enter Name'/>
                <TextField  variant="standard"
                onChange={(e)=>oninputchange(e)} 
                name='username'label='Enter Username'/>
                <TextField variant="standard"
                onChange={(e)=>oninputchange(e)} 
                name='password'label='Enter Password'/>

                {error?<Error>something went wrong!!! please try again</Error>:""}

                <SignupButton onClick={(e)=>signupuser(e)} >Sign Up</SignupButton>
                <Text style={{textAlign: 'center'}}>OR</Text>
                <LoginButton variant="contained" onClick={()=>togglesignup("login")}>Already have an account</LoginButton>
            </Wrapper>
            )}

            

            
        </Box>
    </Component>
  )
}

const Component=styled(Box)`
    width: 400px;
    margin:auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`
const Image=styled("img")({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});

const Wrapper=styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

