import {combineReducers} from 'redux'
import postsReducer from './postsReducer'
//FIREBASE
import { firebaseReducer } from "react-redux-firebase";


export const reducers = combineReducers({
    postsData: postsReducer,
})