import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './footer.css';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  }
});

function Footer(props) {
  const { classes } = props;
  return (
    <footer className="footer">
      <Paper className={classes.root} id = "foot" elevation={1}>
        <Typography variant="h5" component="h3" className="">
            MediCon
        </Typography>
        <Typography component="p">
          @2020 All rights reserved
        </Typography>
      </Paper>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);