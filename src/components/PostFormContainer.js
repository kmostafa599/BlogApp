import React from 'react'
import PostForm from './PostForm'
import {Box, Button, Modal, makeStyles} from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add';


const useStyles = makeStyles({
  box:{
    
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
})

export default function PostFormContainer() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
<Button onClick={handleOpen} variant='outlined' className='m-3' sx={{margin:'5'}}><AddIcon style={{backgroundColor:''}}bgcolor='common.white'/></Button>



<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box className={classes.box}>
    <PostForm  open={open}setOpen={setOpen}/>
  </Box>
</Modal>
    </div>
  )
}
