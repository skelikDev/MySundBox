import React, {useState} from 'react';
import {colors, makeStyles} from "@material-ui/core";
import {useDrag, useScroll} from "react-use-gesture";
import {useSpring, a} from "@react-spring/web";


const useStyles = makeStyles((theme) => ({
    box:{
        width:100,
        height: 100,
        background: colors.pink.A400,
        border: `1px solid ${colors.pink.A700}`,
        borderRadius: 10,
       cursor: "pointer",
    }
}))

export const DragWithSpringDemos = () => {
    const classes = useStyles()
    const [position, api] = useSpring(()=>({x:0,y:0}));
    const bind = useDrag(({offset})=> api({x:offset[0],y:offset[1]}) )
    return (
        <div>
            <a.div {...bind()} style={position} className={classes.box}/>
        </div>
    );
};