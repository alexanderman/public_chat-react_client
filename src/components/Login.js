import React, { useState } from 'react';
import { TextField, Card, CardContent, CardActions, CardHeader, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    container: {
        display: 'flex',
        marginTop: '2rem',
        alignItems: 'center'
    },
    title: {
        opacity: 0.6,
        marginBottom: '0.5rem'
    },
    actions: {
        padding: '1rem',
        paddingTop: 0
    }
});

export default ({ onLogin }) => {
    const classes = useStyles();
    const [nickname, setNickname] = useState('');
    const [hasError, setHasError] = useState(false);

    const onInputChange = e => setNickname(e.target.value);

    const clickHandler = () => {
        const _hasError = nickname.length < 4 || !/^\w+$/.test(nickname);
        setHasError(_hasError);

        if (!_hasError && onLogin) {
            onLogin(nickname);
        }
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            clickHandler();
        }
    }

    return (
        <Container maxWidth="xs" className={classes.container}>
            <Card>
                <CardHeader subheader="Please enter nickname at least four characters long, use only alphanumeric characters" />
                <CardContent>
                    <TextField error={hasError} 
                        onKeyPress={handleEnter}
                        helperText={hasError ? 'invalid characters or too short' : ''} 
                        value={nickname} fullWidth 
                        variant="outlined" label="nickname" onChange={onInputChange} />
                </CardContent>
                <CardActions className={classes.actions}>
                    <Button variant="contained" color="primary" fullWidth onClick={clickHandler}>Login</Button>
                </CardActions>
            </Card>
        </Container>
    );
}