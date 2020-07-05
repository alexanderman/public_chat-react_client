import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const WhiteButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    borderColor: theme.palette.getContrastText(blue[500])
  },
}))(Button);

const useStyles = makeStyles({
    toolbar: {
        justifyContent: 'space-between'
    }
})


export default ({ user, logout }) => {
    const classes = useStyles();
    const title = user ? `Welcome ${user.username}` : 'Public Chat';
    
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography>{title}</Typography>
                { user ? <WhiteButton variant="outlined" onClick={logout}>Logout</WhiteButton> : null }
            </Toolbar>
        </AppBar>
    );
}