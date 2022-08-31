
import React, { useEffect, useState } from 'react';
import { styled, TextareaAutosize, Button, InputBase, FormControl  } from '@mui/material';
import axios from 'axios';
 import { useNavigate, useParams } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux"
import { updatepostaction } from '../../redux/action/postaction';
 

export const Update = () => {
    
  const {id}=useParams();
    const dispatch=useDispatch();
    const{user}=useSelector((state)=>state.user)

    const navigate=useNavigate()

    const [initpost,setinitpost]=useState({ 
        title:"",
        description:"",
        picture:"",
        username:"",
        categories:"",
        createdDate:new Date(),
    })

    const url =initpost.picture?initpost.picture:'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';



    const handlechange=(e)=>{
        setinitpost({...initpost,[e.target.name]:e.target.value})
    }
    const updatepost=()=>{
        dispatch(updatepostaction(user.token,initpost,id))
        
            navigate(`/`)
        
    }

    useEffect(()=>{
      const fun=async()=>{
        let {data}=await axios.get(`http://localhost:8080/posts/${id}`,{
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          })
          setinitpost(data)
          
    }
    fun()
    },[user,id])


  return (
    <Container>
        <Image src={url} alt="img"/>

        <StyledFormControl>
            

            
            <InputTextField name="title" value={initpost.title} onChange={(e)=>handlechange(e)} placeholder="Title"/>
            <Button variant="contained" onClick={()=>updatepost()}>Update</Button>


        </StyledFormControl>
        <InputTextField name="picture" value={initpost.picture} onChange={(e)=>handlechange(e)} placeholder="Image URL"/>
        <Textarea name="description" value={initpost.description} onChange={(e)=>handlechange(e)} rowsmin={5} placeholder="Tell Your Story ..."/>
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
