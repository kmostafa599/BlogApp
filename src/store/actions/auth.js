import firebase from "../../config/firebase"
import { SIGNUP_ERROR, SIGNUP_SUCCESS } from "./actionTypes";


export const signup = (email, password) => async dispatch => {
    try{
        firebase.auth().createUserEmailAndPassword(email, password)
            .then(dataBeforeEmail =>{
                firebase.auth().onAuthStateChanged(function(user){
                    user.sendEmailVerification();
                });
            })
            .then(dataAfterEmail=>{
                firebase.auth().onAuthStateChanged(function(user){
                    if(user.emailVerified){
                        //email is verified
                        dispatch({
                            type:SIGNUP_SUCCESS,
                            payload:
                                "Your account was successfully created! Now you need to verify your e-mail address, please go check your inbox."

                        });
                    } else {
                        // Email is not verified

                        dispatch({
                        type:SIGNUP_ERROR,
                        payload:
                            "Something went wrong, we couldn't create your account. Please try again."
                    });
                }
                });
            }).catch(function(error){
                dispatch({
                    type:SIGNUP_ERROR,
                    payload:
                        "Something went wrong, we couldn't create your account. Please try again."
                });
            });
    }
    catch(error){
        dispatch({
            type: SIGNUP_ERROR,
            payload:
                "Something went wrong, we couldn't create your account. Please try again."

        });
    }
};

// Signing in with Firebase
export const signin = (email, password, callback) => async dispatch => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          dispatch({ type: SIGNIN_SUCCESS });
          callback()
          signin(email, password, () => props.history.push("/"));
        })
        .catch(() => {
          dispatch({
            type: SIGNIN_ERROR,
            payload: "Invalid login credentials"
          });
        });
    } catch (err) {
      dispatch({ type: SIGNIN_ERROR, payload: "Invalid login credentials" });
    }
  };