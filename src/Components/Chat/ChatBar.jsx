import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end"
  }
}));

export default function ChatBar() {
  const classes = useStyles();

  return (
    <div className='chatbar'>
      <AppBar position="static" id="navbar">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Link to="/consultadoc">
              <ArrowBackRoundedIcon className="icon" />
            </Link>
          </IconButton>

          <Typography className={classes.title} variant="h3" noWrap>
            Chat with Dr.Good Doctor
          </Typography>
          <IconButton aria-label="search" color="inherit">
            <CallRoundedIcon className="icon" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
