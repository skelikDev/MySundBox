import React, {useState} from 'react';
import {colors, makeStyles} from "@material-ui/core";
import {useDrag, useScroll} from "react-use-gesture";
import {useSpring} from "@react-spring/web";


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

export const DragWithoutSpringDemos = () => {
    const classes = useStyles()
    const [position, setPosition] = useState({x:0,y:0});
    const bind = useDrag(({offset})=> setPosition({x: offset[0], y: offset[1]}))
    return (
        <div>
            <div {...bind()} style={{position: "relative", top: position.y, left: position.x}} className={classes.box}/>
        </div>
    );
};