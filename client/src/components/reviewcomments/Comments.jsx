import React, { useEffect, useState } from 'react'
import { Box, TextareaAutosize, Button, styled } from '@mui/material';
import {useDispatch,useSelector} from "react-redux"
import { createreviewaction } from '../../redux/action/reviewaction';
import axios from 'axios';
import { Comment } from './Comment';


export const Comments = ({post}) => {
    const {user}=useSelector((state)=>state.user)
    
    const dispatch=useDispatch();
    const [toggle,settoggle]=useState(false)

    const [review,setreview]=useState({
        name:"",
        userid:"",
        postid:"",
        review:""
    })
    const [reviews,setreviews]=useState([]);
    const handlechange=(e)=>{
        setreview({...review,
            name:user.username,
            userid:user.id,
            postid:post._id,
            review:e.target.value
        })
    }

    const url = 'https://static.thenounproject.com/png/12017-200.png'

    const addreview=(e)=>{
        dispatch(createreviewaction(user.token,review))
        settoggle(prev => !prev)
    }

    useEffect(()=>{
        const fun=async()=>{
            let {data}=await axios.get(`http://localhost:8080/reviews/${post._id}`,{
                headers: {
                  authorization: `Bearer ${user.token}`,
                },
              })
              setreviews(data)
              
        }
        fun()
    },[user,post,toggle])

  return (
    <Box>
        <Container>
            <Image src={url} alt="user"/>
            <StyledTextArea
            rowsmin={5} 
            onChange={(e) => handlechange(e)}
            placeholder="Please write your valuable review....."
            />
            <Button 
                variant="contained" 
                size="medium" 
                style={{ height:"40px" }}
                onClick={(e)=>addreview(e)}
            >Review</Button>             
            
        </Container>
        <Box>
            {
                reviews && reviews.length > 0 && reviews.map(rev => (
                    <Comment key={rev._id} rev={rev} settoggle={settoggle}  />
                ))
            }
        </Box>
    </Box>
  )
}

const Container = styled(Box)`
    margin-top: 100px;
    display: flex;
`;

const Image = styled('img')({
    width: 50,
    height: 50,
    borderRadius: '50%'
});

const StyledTextArea = styled(TextareaAutosize)`
    height: 100px !important;
    width: 100%; 
    margin: 0 20px;
`;


