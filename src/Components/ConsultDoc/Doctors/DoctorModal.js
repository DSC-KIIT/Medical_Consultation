import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import ChatIcon from '@material-ui/icons/Chat';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


function DoctorModal({doc, open, handleClose}) {
    
    if(!doc.name)
    {
        return <div></div>;
    }
    var stars = []
    var antistars = []
    for(let i=0;i<doc.rating;i++)
    {
        stars.push(i);
    }
    for(let i=0;i<(5 - doc.rating);i++)
    {
        antistars.push(i);
    }
    return (
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
            
          <DialogContent>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
            </IconButton>
            <div>
              <Typography variant="h2">{doc.name}</Typography>
              <Typography variant="h4">{doc.specialization}</Typography>
            </div>
            <hr />
            <br></br>
            <div>
              <img alt="doc" src={doc.img} />
            </div>
            <br></br>
            <div>
              <Typography variant='h5'>{doc.experience} of caring.</Typography>
              <Typography variant='h5'>{doc.location}</Typography>
              <Typography variant='h6' dangerouslySetInnerHTML={{__html: doc.description}}></Typography>
              <Typography variant='h5'>{doc.fee}</Typography>
            </div>
            <br></br>
            <div>
              {
                stars.map((star)=><StarRoundedIcon fontSize='large'/>)
              }
              {
                    antistars.map((antistar)=><StarBorderRoundedIcon fontSize='large'/>)
              }
            </div>
          </DialogContent>
          <DialogActions>
            <Link to="/chat">  
            <Button onClick={handleClose} startIcon={<ChatIcon></ChatIcon>} variant="contained" color="primary">
              Chat now
            </Button>
            </Link>
            <Button onClick={handleClose} startIcon={<PhoneRoundedIcon></PhoneRoundedIcon>} variant="contained" color="primary">
              Contact Clinic
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
export default DoctorModal;