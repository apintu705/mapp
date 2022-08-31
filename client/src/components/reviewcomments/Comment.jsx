import React from 'react'
import { Typography, Box, styled } from "@mui/material";
import { Delete } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { deletereviewaction } from '../../redux/action/reviewaction';

export const Comment = ({rev,settoggle}) => {
  const dispatch=useDispatch();
  const {user}=useSelector((state)=>state.user)
  const removeComment=()=>{
    dispatch(deletereviewaction(user.token,rev._id))
    settoggle(prev => !prev);
    
  }
  
  return (
        <Component>
            <Container>
                <Name>{rev.name}</Name>
                <StyledDate>{new Date(rev.createdAt).toDateString()}</StyledDate>
                { rev.userid === user.id && <DeleteIcon onClick={() => removeComment()} /> }
            </Container>
            <Typography>{rev.review}</Typography>
        </Component>
  )
}



const Component = styled(Box)`
    margin-top: 30px;
    background: #F5F5F5;
    padding: 10px;
`;

const Container = styled(Box)`
    display: flex;
    margin-bottom: 5px;
`;

const Name = styled(Typography)`
    font-weight: 600;
    font-size: 18px;
    margin-right: 20px;
`;

const StyledDate = styled(Typography)`
    font-size: 14px;
    color: #878787;
`;

const DeleteIcon = styled(Delete)`
    margin-left: auto;
`;