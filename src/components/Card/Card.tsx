import React from 'react';
import {Divider, makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    demoContainer: {
        maxWidth: "100%",

        background: "rgba(184,184,184,0.2)",
        border: "1px solid rgba(184,184,184,0.5)",
        borderRadius: "10px",
    },
    demoHeader: {
        minHeight:"50px",
        padding: '5px 0'
    },
    line:{
        margin: "0 10%",
    },
    demoContent: {
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
        background: "rgba(184,184,184,0.2)",
        height: "400px",
        borderRadius: "5px",
    },
}))

interface ICard {
    title: string,
    children: any
}
export const Card =({title, children}:ICard) => {
    const classes = useStyles()
    return (
        <div className={classes.demoContainer}>
            <div className={classes.demoHeader}> <Typography variant={"h2"} noWrap component={"h2"} >{title}</Typography></div>
            <Divider className={classes.line}/>
            <div className={classes.demoContent}>{children}</div>
        </div>
    );
};