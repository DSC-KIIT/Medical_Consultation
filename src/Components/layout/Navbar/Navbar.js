import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import './navbar.css';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function Navbar(){
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return(
    <div className={classes.root}>
      <AppBar position="static" id="navbar">
        <Toolbar>
          
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenu}>
            <MenuIcon className="menu"/>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><a href='/'>Home</a></MenuItem>
                <MenuItem onClick={handleClose}><a href='/consultadoc'>Consult a Doctor</a></MenuItem>
              </Menu>
            <Typography variant="h2" className={classes.title}>
             <p className="branding">MediCon</p>
            </Typography>
        </Toolbar>
      </AppBar>
  </div>
);

}

export default Navbar;

/*<nav class="navbar navbar-default ">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed " data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand branding" href="/"><p className= "color">MediCon</p></a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="/"><p className= "color links">Home</p></a></li>
            <li><a href="/consultadoc"><p className= "color links">Consult a Doctor</p></a></li>
          </ul>
        </div>
      </div>
    </nav>*/