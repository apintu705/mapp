import React, { useState } from 'react'
import { Box, TextareaAutosize, Button, styled } from '@mui/material';
import {useDispatch,useSelector} from "react-redux"
import { createreviewaction } from '../../redux/action/reviewaction';


export const Comments = ({post}) => {
    const {user}=useSelector((state)=>state.user)
    
    const dispatch=useDispatch();

    const [review,setreview]=useState({
        userid:"",
        postid:"",
        review:""
    })
    const handlechange=(e)=>{
        setreview({...review,
            userid:user.id,
            postid:post._id,
            review:e.target.value
        })
    }

    const url = 'https://static.thenounproject.com/png/12017-200.png'

    const addreview=(e)=>{
        dispatch(createreviewaction(user.token,review))
    }

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
        {/* <Box>
            {
                comments && comments.length > 0 && comments.map(comment => (
                    <Comment comment={comment} setToggle={setToggle} />
                ))
            }
        </Box> */}
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


