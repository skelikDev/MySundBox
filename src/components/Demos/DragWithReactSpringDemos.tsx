import React, {useEffect, useRef, useState} from 'react';
import {colors, makeStyles} from "@material-ui/core";
import {useDrag, useGesture, useScroll} from "react-use-gesture";
import {useSpring, a} from "@react-spring/web";


const useStyles = makeStyles((theme) => ({
    box: {
        width: 100,
        height: 100,
        background: colors.pink.A400,
        border: `1px solid ${colors.pink.A700}`,
        borderRadius: 10,
        cursor: "pointer",
        touchAction:"none",
    }
}))

export const DragWithSpringDemos = () => {
    useEffect(() => {
        const preventDefault = (e: Event) => e.preventDefault()
        document.addEventListener('gesturestart', preventDefault)
        document.addEventListener('gesturechange', preventDefault)

        return () => {
            document.removeEventListener('gesturestart', preventDefault)
            document.removeEventListener('gesturechange', preventDefault)
        }
    }, [])
    const classes = useStyles()
    const domTarget = useRef(null);
    const [position, api] = useSpring(() => ({x: 0, y: 0, config: {mass: 10, tension: 350, friction: 40},}));
const bind = useDrag(({offset})=>{api.start({x: offset[0], y:offset[1]})})

    return (
            <a.div {...bind()} style={position} className={classes.box}/>
    );
};