import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Fade, makeStyles, Typography } from '@material-ui/core';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const useStyles = makeStyles(theme => ({
  card: {
    width: "18rem",
  },
  cardBody: {
    position: "relative",
  },
  editButton: {
    display: "flex",
    borderRadius: "35px",
  },
  readMoreLink: {
    position: "absolute",
    right: "3rem",
    bottom: "0.3rem",
  },
  readMoreButton: {
    position: "absolute",
    bottom: '5px',
    right: '0px',
  },

}))

export default function Post({ handleRemove, post }) {
  const [edit, setEdit] = useState(false)
  const [value, setValue] = useState(post.title)
  const classes = useStyles()
  return (
    <div>
      <Fade in={true}
        timeout={1500}
      >
            <Card className='m-4' style={{ position: 'relative' }} sx={{ maxWidth: 345 }}>
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
                      <input value={value} onChange={(e) => setValue(e.target.value)} className='m-2' type='text' />
                      <Button className={classes.editButton} onClick={() => {
                        setEdit(false)
                        post.title = value

                      }}>Edit</Button>
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

                <Link to={`/post/${post.id}`} className={classes.readMoreLink} >
                  <Button className={classes.readMoreButton}><ReadMoreIcon /></Button>
                </Link>
                
                <KeyboardArrowUpIcon/>
                {post.upVotesTotal}
                <KeyboardArrowDownIcon/>
                {post.downVotesTotal}
              </CardActions>
            </Card>

      </Fade>


    </div>
  )
}
