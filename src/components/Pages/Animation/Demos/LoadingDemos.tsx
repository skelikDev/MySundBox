import React, {useState} from 'react';
import {colors, makeStyles} from "@material-ui/core";
import useMeasure from 'react-use-measure'
import {useSpring, animated} from '@react-spring/web'
import {config} from "react-spring";


let bg = {
    start: colors.pink.A400,
    end: "#bb002f"
}
const useStyles = makeStyles((theme) => ({
    root: {
        background: "transparent",
        width: "200px",
        height: 50,
        borderRadius: "10px",
        position: "relative",
        overflow: "hidden",
        border: '2px solid black'
    },
    animated: {
        position: "absolute",
        top: 0,
        left: "-2px",
        height: "400%",
        width: "198px",
        backgroundColor: colors.purple["50"],
        opacity: 1,
        borderRadius: "10px",
    },
    animatedNumber:{
        position:"absolute",
        width:"100%",
        height: "100%",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: "1.5rem",
        color: colors.blueGrey["50"],
    },
}))

export const LoadingDemos = () => {
    const [complete, setComplete] = useState(false);
    const [ref, {width}] = useMeasure({ polyfill: ResizeObserver })
    const classes = useStyles()
    const animatedFill = useSpring({
        width: complete ? width : 0,
        background: complete ? bg.end : bg.start,
        config: config.molasses
    })
    const  animatedNum= useSpring({
        color: complete ? "rgb(240,240,240)" : "rgb(0,0,0)",
    })

    return (
        <div ref={ref} className={classes.root} onClick={() => setComplete(!complete)}>
            <animated.div style={animatedFill} className={classes.animated}/>
            <animated.div className={classes.animatedNumber} style={animatedNum}>{(animatedFill.width).to(x=> (x/2).toFixed(0))}</animated.div>
        </div>
    );
};