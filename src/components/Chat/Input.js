import React, { useState } from 'react';
import { TextField, Container, Button, Divider } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { Send } from '@material-ui/icons';

const useStyles = makeStyles({
    container: {
        padding: '1rem',
        margin: 0,
        display: 'flex', 
        flexDirection: 'row',
        // backgroundColor: blue[500]
    },
    textField: {
        border: 0,
        marginRight: '0.5rem'
    },
    button: {

    }
});

export default ({ sendMessage }) => {
    const classes = useStyles();
    const [message, setMessage] = useState('');
    const disabled = !message.length;
    
    const handTextChange = e => {
        setMessage(e.target.value);
    }

    const handleSend = () => {
        if (message.length > 0) {
            setMessage('');
            sendMessage(message);
        }
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    }

    return (
        <>
        <Divider light />
        <Container className={classes.container}>
            <TextField 
                fullWidth
                className={classes.textField}
                variant="filled"
                onKeyPress={handleEnter} 
                value={message} 
                onChange={handTextChange} 
                placeholder="enter your message"
            />
            <Button 
                variant="outlined"
                disabled={disabled} 
                color="primary" 
                onClick={handleSend}><Send />
            </Button>
        </Container>
        </>
    );
}
