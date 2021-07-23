import React from 'react';
import {Container, makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    pageContent: {
        width: '100vw',
        padding: "100px 0",
        overflow: "scroll",
        overflowX: "hidden",
    },
}))

export const FORSTUDY = () => {
    const classes = useStyles()
    return (
        <div className={classes.pageContent}>
            <Container>
            
            </Container>

        </div>
    );
};