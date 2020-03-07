import React from 'react'
import Typography from '@material-ui/core/Typography';
import ChatIcon from '@material-ui/icons/Chat';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

function Doctor({doc, onClick})
{
   
    const classes = useStyles();
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
      
    return(
        <Paper className='job' onClick={onClick}>
            <div>
                <img alt="doc" src={doc.img} />
            </div>
            <div>
                <Typography variant='h3'>{doc.name}</Typography>
                <Typography variant='h4'>{doc.specialization}</Typography>
                <Typography variant='h5'>{doc.experience} of looking after patients!</Typography>
                <Typography variant='h6'>{doc.location}</Typography>
            </div>
            <div>
                {
                   stars.map((star)=><StarRoundedIcon fontSize='large'/>)
                }
                {
                    antistars.map((antistar)=><StarBorderRoundedIcon fontSize='large'/>)
                }
            </div>
            <div>
                <Link to='/chat'>
                <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<ChatIcon></ChatIcon>}
                >
                Chat now
                </Button>
                </Link>
            </div>
        </Paper>
    );
}
export default Doctor;