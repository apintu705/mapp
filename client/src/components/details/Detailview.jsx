import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useSelector,useDispatch} from "react-redux"
import { Box, Typography, styled } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import {deletepostaction} from "../../redux/action/postaction"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Comments } from '../reviewcomments/Comments';

export const Detailview = () => {
    const dispatch=useDispatch();
    const navigate = useNavigate()
    const {user}=useSelector((state)=>state.user)
    const {id}=useParams();
    const [post,setpost]=useState([])
    const deletepost=()=>{
        dispatch(deletepostaction(user.token,id));
        navigate("/")
    }
    useEffect(()=>{
        const fun=async()=>{
            let {data}=await axios.get(`http://localhost:8080/posts/${id}`,{
                headers: {
                  authorization: `Bearer ${user.token}`,
                },
              })
              setpost(data)
        }
        fun()
    },[user,id])
  
  return (
    <Container>
        <Image src={post.picture} alt={post._id}/>
        <Box style={{ float: 'right' }}>
                {   
                    user.username === post.username && 
                    <>  
                        <Link to={`/update/${post._id}`}><EditIcon color="primary" /></Link>
                        <DeleteIcon onClick={()=>deletepost()} color="error" />
                    </>
                }
            </Box>

        <Heading>{post.title}</Heading>

        <Author>
                <Link to={`/?username=${post.username}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography>Author: <span style={{fontWeight: 600}}>{post.username}</span></Typography>
                </Link>
                <Typography style={{marginLeft: 'auto'}}>{new Date(post.createdDate).toDateString()}</Typography>
            </Author>

            <Typography>{post.description}</Typography>
            <Comments post={post}/>
    </Container>
    
  )
}

const Container = styled("div")({
    margin: '50px 100px',
})
    

    
    

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});
const EditIcon = styled(Edit)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;
const DeleteIcon = styled(Delete)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
`;

const Author = styled(Box)`
    color: '#878787';
    display: 'flex';
    margin: '20px 0';
    
`