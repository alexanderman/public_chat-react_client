import React, { useEffect, useState, useRef } from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import PerfectScrollbar from 'react-perfect-scrollbar';
// import 'react-perfect-scrollbar/dist/css/styles.css';
import Input from './Input';
import Message from './Message';
import connect from '../../services/socket-service';
import ScrollBar from '../ScrollBar';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        maxWidth: '700px',
        flex: 1,
        flexDirection: 'column',
        padding: 0,
        minHeight: '100px', // perfect scroll bar needs height in parent
        backgroundColor: '#ffffff'
    },
    scrollbar: {
        padding: '1rem 0',
        paddingBottom: 0    
    }
});

let chatSvc;

export default ({ user }) => {
    const classes = useStyles();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        console.log('subscribe to messages');
        chatSvc = connect(receiveMessages);

        return () => {
            console.log('unsubscribe from messages');
            chatSvc.closeConnection();
        }
    }, []);


    const receiveMessages = receivedMessages => {
        setMessages(messages => ([...messages, ...receivedMessages]));
    }

    const sendMessage = message => {
        chatSvc.sendMessage(user, message);
        setMessages(messages => ([...messages, { user, message }]));
    }

    const isMe = message => message.user.username === user.username;
    
    return (
        <Container square="true" className={classes.container}>
            <ScrollBar>
                {messages.map((m, i) => <Message { ...m } isMe={isMe(m)} key={i} />)}
            </ScrollBar>
            <Input sendMessage={sendMessage} />
        </Container>
    );
}
