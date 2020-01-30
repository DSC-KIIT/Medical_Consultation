import React from 'react'
import Typography from '@material-ui/core/Typography';
import ChatIcon from '@material-ui/icons/Chat';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

function Doctor({doc, onClick})
{
   
    const classes = useStyles();
      
    return(
        <Paper className='job' onClick={onClick}>
            <div>
                <img src={doc.img} />
            </div>
            <div>
                <Typography variant='h3'>{doc.name}</Typography>
                <Typography variant='h4'>{doc.specialization}</Typography>
                <Typography variant='h5'>{doc.experience} of looking after patients!</Typography>
                <Typography variant='h6'>{doc.location}</Typography>
            </div>
            <div>
                <Typography>{doc.rating}</Typography>
            </div>
            <div>
                <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<ChatIcon></ChatIcon>}
                >
                Chat now
                </Button>
            </div>
        </Paper>
    );
}
export default Doctor;