import React from 'react'
import Post from './Post'
import Skeleton from '@mui/material/Skeleton';
import { Box, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../store/actions';

export default function PostsContainer() {
  // console.log(posts)
  const posts = useSelector(state=> state)
  const dispatch = useDispatch()
  const handleRemove = (id)=>{
    // const newPosts = posts.filter(post=>(
    //   post.id !== id
    // ))
    //dispatch(deletePost(id))
  }  
  
 
 
  
  return (
    <div>
              {/* {console.log("this is posts",posts)} */}

      {posts.postsData.length?(<Grid container spacing={2}>

        {/* {console.log("this is posts",posts)} */}
            {
                posts.postsData.map((post,index)=>(
                  <Grid key={post.id} item xs={12}sm={6} md={4} >
                    <Post key={post.id} post={post} handleRemove={handleRemove}  />
                    </Grid>

                ))
            }
        </Grid>): <div></div>
         
    }
    
    </div>
  )
}
