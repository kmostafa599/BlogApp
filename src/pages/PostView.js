import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Post from '../components/Post'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Fade, Grid, makeStyles, Typography } from '@material-ui/core';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, updatePost } from '../store/actions';
import { useFormik } from 'formik';
import { object, string, number } from 'yup';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { flexbox } from '@mui/system';
import { addVote } from '../config/api';
import Comment from '../components/Comment';



const useStyles = makeStyles({
    card: {
        width: "18rem",
    },
    cardBody: {
        position: "relative"
    },
})

export default function PostView({ data }) {
    const { id } = useParams()
    const navigate = useNavigate()

    const posts = useSelector(state => state)
    const dispatch = useDispatch()

    const [post, setPost] = useState({})

    const [value, setValue] = useState("")
    const [edit, setEdit] = useState(false)
   
    const formik = useFormik({
        initialValues: {
            title: post.title,
            userId: 3,
            body: post.body,
            comments: [],
            votes: [],

        },
        validationSchema: object({
            title: string().required("Title is required").max(25, "Try again, Reached the limit"),
            userId: number().required("User is required").max(10, "Try again, Reached the limit"),
            body: string().required("Post is required").max(300, "Reached the limit")
        })
    })
    useEffect(() => {
        console.log("Data", data)
        
        const returnedPost = posts.postsData.filter((post) => (+post.id === +id))[0]
        setPost(returnedPost)
        console.log(returnedPost)
        console.log(post)
        // setValue(returnedPost.title)
    }, [])


    const classes = useStyles()

    const handleRemove = (id) => {
        // const removePost = posts.filter(post => (+post.id!==+id))
        dispatch(deletePost(id))
        // setPosts(removePost)
        navigate("/");

    }
    const handleEdit = () => {
        setEdit(!edit)
        console.log({ id, value })
        dispatch(updatePost(id, formik.values))
    }
    const handleVote = (userVote,userId) => {
        dispatch(addVote(id, {  userId, userVote }))
    }


    if (!post) {
        return <div>Page Not Found</div>
    }
    return (
        <div>
            {/* <Fade in={true}
                timeout={1500}
            > */}
                <Card className={`m-3 ${classes.cardBody}`} sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={post.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        {
                            edit ?
                                (<div style={{ display: "flex" }} >
                                    <input value={formik.values.title} onChange={formik.handleChange} className='m-2' type='text' />
                                    <Button className='btn btn-primary' style={{ display: "flex", borderRadius: "35px" }} onClick={() => {
                                        setEdit(false)

                                        // post.title = formik.values.title
                                        handleEdit()

                                    }}>Save</Button>
                                </div>) :

                                <Typography gutterBottom variant="h5" component="div">
                                    {post.title}
                                </Typography>


                        }
                        <Typography variant="subtitle1" color="textSecondary" component="div">
                            {post.userId}
                        </Typography>

                        <Typography variant="body2" color="textSecondary">
                            {post.body}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <KeyboardArrowUpIcon onClick={() => handleVote(1,formik.values.userId)} />
                        {post.upVotesTotal}
                        <KeyboardArrowDownIcon onClick={() => handleVote(-1,formik.values.userId)} />
                        {post.downVotesTotal}
                        <div style={{ display: 'flex', justifyContent: 'flexEnd' }}>
                            <Button onClick={() => setEdit(!edit)} ><EditIcon /></Button>

                            <Button onClick={() => handleRemove(post.id)} >  <DeleteIcon /></Button>
                        </div>




                    </CardActions>
                </Card>
                <Comment />
            {/* </Fade> */}
        </div>
    )
}
