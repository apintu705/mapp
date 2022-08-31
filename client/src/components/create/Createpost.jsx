
import React, { useEffect, useState } from 'react';
import { styled, TextareaAutosize, Button, InputBase, FormControl  } from '@mui/material';

 import { useNavigate, useLocation } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux"
import { createpostaction } from '../../redux/action/postaction';
 

export const Createpost = () => {
    

    const dispatch=useDispatch();
    const{user}=useSelector((state)=>state.user)
    const {error}=useSelector((state)=>state.post)
    const location=useLocation();
    const navigate=useNavigate()

    const [initpost,setinitpost]=useState({ 
        title:"",
        description:"",
        picture:"",
        username:"",
        category:"",
        createdDate:new Date(),
    })

    const url =initpost.picture?initpost.picture:'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';



    const handlechange=(e)=>{
        setinitpost({...initpost,[e.target.name]:e.target.value})
    }
    const savepost=()=>{
        dispatch(createpostaction(user.token,initpost))
        
            navigate("/")
        
    }

    useEffect(()=>{
        initpost.category=location.search?.split("=")[1] || "All";
        initpost.username=user.username
    },[initpost,location,user])


  return (
    <Container>
        <Image src={url} alt="img"/>

        <StyledFormControl>
            

            
            <InputTextField name="title" onChange={(e)=>handlechange(e)} placeholder="Title"/>
            <Button variant="contained" onClick={()=>savepost()}>Publish</Button>


        </StyledFormControl>
        <InputTextField name="picture" onChange={(e)=>handlechange(e)} placeholder="Image URL"/>
        <Textarea name="description" onChange={(e)=>handlechange(e)} rowsmin={5} placeholder="Tell Your Story ..."/>
    </Container>
  )
}

const Container= styled("div")({
margin: '50px 100px'
})
    


const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;
