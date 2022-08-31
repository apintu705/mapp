import React from 'react'
import { Banner } from '../banner/Banner'
import {Categories} from "../categories/Categories"
import { Grid } from '@mui/material';
import {Posts} from "./post/Posts"

export const Home = () => {
  return (
    <>
      <Banner/>
      <Grid container>
          <Grid item lg={2} xs={12} sm={2}>
            <Categories />
          </Grid>
          <Grid container item xs={12} sm={10} lg={10}>
            <Posts/>
          </Grid>
      </Grid>

    </>
    
  )
}
