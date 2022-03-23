import {  makeStyles } from '@material-ui/core'
//Button, Dialog, DialogContent, DialogContentText, DialogTitle,
import React, { useState } from 'react'
import {useFormik} from 'formik'
import { addPost } from '../store/actions'
import {useDispatch, useSelector} from 'react-redux'
import { object, string, number, date, InferType } from 'yup';

const useStyles = makeStyles({
  form:{
    display:'flex',
    flexDirection:'column',
  },
  input:{
    margin:""
  },
})

export default function PostForm({setOpen,open}) {
  const classes = useStyles()

  const dispatch = useDispatch()

  const formik = useFormik ({
    initialValues:{
      title:"",
      userId:3,
      body:"",
      comments:{

      },
      votes:[],
      
    },
    validationSchema: object({
      title:string().required("Title is required").max(25,"Try again, Reached the limit"),
      userId:number().required("User is required").max(10,"Try again, Reached the limit"),
      body:string().required("Post is required").max(300,"Reached the limit")
    })

  })
  // console.log(formik.values)
  const handleOnClick=(e)=>{
    const newPost = {...formik.values}
    //title:formik.values.title,author:formik.values.author,post:formik.values.post
    dispatch(addPost(newPost))
    // setPosts([...posts,{id:Math.random(),title:formik.values.title,author:formik.values.author,post:formik.values.post}])
    // console.log(posts)
    setOpen(!open)
  }
  
  return (
    <div className={classes.form}>
      <label htmlFor="title">Title</label>
      <input  onChange={
        // (e)=>setTitle(e.target.value)
              formik.handleChange
            } 
            value={formik.values.title} id="title" type="text" />
  
      <label htmlFor="author">Author</label>
      <input  onChange={
        formik.handleChange
        // (e)=>setAuthor(e.target.value)
        } value={formik.values.userId} id="author" type="email" />

      <label htmlFor="post">Post</label>
      <textarea name="body" id="post" cols="30" rows="5"  value={formik.values.body}onChange={
                formik.handleChange

        // (e)=>setPost(e.target.value)
        }></textarea>
      <button className="m-2"onClick={handleOnClick}>Submit</button>
      
    </div>
  )
}
