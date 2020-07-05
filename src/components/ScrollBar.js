import React, { useRef, useState, useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { makeStyles } from '@material-ui/core/styles';


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

export default ({ children }) => {
    const classes = useStyles();
    const [isAutoScroll, setIsAutoScroll] = useState(true);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (isAutoScroll) {
            scrollRef.current._container.scrollTop = scrollRef.current._container.scrollHeight;
        }
    }, [children]);

    return (
        <PerfectScrollbar 
            ref={scrollRef} 
            className={classes.scrollbar} 
            onScrollUp={() => setIsAutoScroll(false)}
            onYReachEnd={() => setIsAutoScroll(true)}
            options={{ suppressScrollX: true }}>

            { children }            

        </PerfectScrollbar> 
    );
}
