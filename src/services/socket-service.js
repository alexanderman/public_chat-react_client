import socketClient from 'socket.io-client';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default onMessagesReceived => {
    const socket = socketClient(SERVER_URL);
    socket.on('message', onMessagesReceived);
    console.log('socket connecting...');

    /** patch for: WebSocket is already in CLOSING or CLOSED state, which caused loading initial messages over and over, with each disconnect */
    /** only on initial connect get prev messages, NOT on reconnects */
    socket.emit('get_prev_messages');
    socket.on('prev_messages', onMessagesReceived); 
    

    const sendMessage = (user, message) => {
        socket.emit('message', [{ user, message }]);
    }
    
    const closeConnection = () => {
        socket.disconnect();
        console.log('socket disconnected');
    }
    
    return { sendMessage, closeConnection };
}

