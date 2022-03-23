// import logo from './logo.svg';

// import Post from './components/Post';
// import Skeleton from '@material-ui/lab/Skeleton';
// import Stack from '@mui/material/Stack';
// import { Grid } from '@material-ui/core';
// import { getData } from './config/api';


import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { InitialData } from './store/actions';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import PostsDetails from './pages/PostDetails';
import PostView from './pages/PostView';

function App() {

  const dispatch = useDispatch()

  const data = useSelector(state => state)
  console.log(data)
  useEffect(() => {
    dispatch(InitialData())
    console.log(data)
  }, [])
  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <BrowserRouter>
        <div className="">
          <Header />
          <Routes>
            
            <Route path='/' element={<PostsDetails  />} />
            <Route path='/post/:id' element={<PostView data={data}/>} />

          </Routes>
          {/* <PostsContainer className="m-2" setPosts={setPosts} posts={posts}/> */}
        </div>
      </BrowserRouter>

      /* {
        data.postsReducer.length ? <Grid container >
          <Grid item xs={4} sm={4} md={4}>

            <div> <Post /> </div>
          </Grid>

        </Grid>
          : (<Grid container spacing={2}>
            <Grid item xs={4} sm={4} md={4}>
              <Stack spacing={1}>
                <Skeleton variant="text" />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={118} />
              </Stack>
            </Grid>

          </Grid>)
      } */
  );
}

export default App;
