import React from 'react';
import { Container, Avatar, Paper, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStylesLeft = makeStyles(theme => {
    return {
        container: {
            display: 'flex', 
            flexDirection: 'row',
            marginBottom: '1rem'
        },
        avatar: {
            marginRight: '0.5rem'
        },
        text: {
            marginTop: '0.5rem',
            marginRight: '2rem',
            borderRadius: '1.5rem',
            padding: '1rem',
            borderTopLeftRadius: 0
        }
    }
});

const useStylesRight = makeStyles(theme => {
    return {
        container: {
            display: 'flex', 
            flexDirection: 'row-reverse',
            marginBottom: '1rem'
        },
        avatar: {
            marginLeft: '0.5rem'
        },
        text: {
            backgroundColor: theme.palette.info.light,
            marginTop: '0.5rem',
            marginLeft: '2rem',
            borderRadius: '1.5rem',
            padding: '1rem',
            borderTopRightRadius: 0
        }
    }
});

// when has no avatar, will display first latters
function getUsernameLetters(username) {
    const parts = username.trim().split(/\s+/);
    return ((parts[0][0] || '') + (parts[1] ? parts[1][0] : '')).toUpperCase();
}


export default ({ user: { avatarUrl, username }, message, isMe }) => {
    const classes = isMe ? useStylesRight() : useStylesLeft();
    const userLetters = getUsernameLetters(username);
    
    return (
        <Container className={classes.container}>
            <Tooltip title={username}>
            <Avatar alt={username} className={classes.avatar} src={avatarUrl}>
                {userLetters}
            </Avatar>
            </Tooltip>
            <Paper elevation={3} className={classes.text}>{message}</Paper>
        </Container>
    );
}