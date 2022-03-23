import * as api from "../../config/api"
import { ADD_POST, ADD_VOTE, DELETE_POST, EDIT_POST, GET_INITIAL_DATA } from "./actionTypes"






//Action creators

export const InitialData = () => async (dispatch) => {
    try {
        const response = await api.getData()
        // console.log(response)
        dispatch({ type: GET_INITIAL_DATA , payload: response.data.data })
    }
    catch (error) {
        console.log(error)
    }
}

export const addPost = (newPost) => async (dispatch) => {
    console.log("Actions",newPost)
    try {
        await api.addPost(newPost)
        const response = await api.getData()
        console.log(response)
        dispatch({ type: ADD_POST, payload: response.data.data })
    }

    catch (error) {
        console.log(error)
    }
}
export const updatePost = (id, updatedPost) => async (dispatch) => {
    console.log('heloo',updatedPost)
    try {
        await api.editPost(id, updatedPost)
        const response = await api.getData()
        console.log(response)
        dispatch({ type: EDIT_POST, payload: response.data.data })
    }

    catch (error) {
        console.log(error)
    }
}


export const addVote = (id, vote) => async (dispatch) => {
    // console.log('heloo',updatedPost)
    console.log(vote)
    try {
        await api.addVote(id, vote)
        const response = await api.getData()
        console.log(response)
        dispatch({ type: ADD_VOTE , payload: response.data.data })
    }

    catch (error) {
        console.log(error)
    }
}





export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        const response = await api.getData()
        console.log(response)
        dispatch({ type: DELETE_POST , payload: response.data.data })
    }

    catch (error) {
        console.log(error)
    }
}