import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {getallpostaction}  from "../../../redux/action/postaction"
import { Grid, Box } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import {Post} from "./Post"

export const Posts = () => {
  const {user}=useSelector((state)=>state.user);
  const {post}=useSelector((state)=>state.post)

  
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  
  const dispatch=useDispatch();


  useEffect(()=>{
    if(user){
      dispatch(getallpostaction(user.token))
    }
    
  },[dispatch,user])

  return (
    <>
      {
                post?.length ? post.map(elem => (
                    <Grid item lg={3} sm={4} xs={12}>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`details/${post._id}`}>
                            <Post post={elem} />
                        </Link>
                    </Grid>
                )) : <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
                        No data is available for selected category
                    </Box>
            }
    </>
  )
}
