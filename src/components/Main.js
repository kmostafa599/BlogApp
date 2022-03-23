import React from 'react'
import { Login } from './Login'
import { connect } from "react-redux";
import PostsDetails from '../pages/PostDetails';
import { CircularProgress } from '@material-ui/core';

const Main = ({ auth }) => {
  return (
    <div>
        {!auth.isLoaded ?<CircularProgress /> : !auth.isEmpty ? <PostsDetails /> : <Login />}
    </div>
    );
}

function mapStateToProps(state) {
    return {
      auth: state.firebaseReducer.auth
    };
  }
export default connect(mapStateToProps)(Main);