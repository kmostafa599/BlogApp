import { ADD_POST, ADD_VOTE, DELETE_POST, EDIT_POST, GET_INITIAL_DATA } from "../actions/actionTypes"


const  postsReducer=(state =[], action)=>{
    switch (action.type){
        case GET_INITIAL_DATA:
        case ADD_POST:
        case EDIT_POST:
        case DELETE_POST:
            return action.payload
        default:
            return state
    }
}

export default postsReducer