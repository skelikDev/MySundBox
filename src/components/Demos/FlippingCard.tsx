import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core";
import mgs from "../../assets/flippingCard/mgs.png"
import deathStranding from "../../assets/flippingCard/deathStranding.png"
import {useSpring, a} from "@react-spring/web";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        overflow: 'hidden',
        position: "relative",

    },
    back: {
        backgroundImage: `url(${mgs})`,
        width: "555px",
        height: "328px",
        backgroundSize: "cover",
        position: "absolute",
        cursor: "pointer",
        border: "1px solid black",
        willChange: "transform, opacity",
    },
    front: {
        backgroundImage: `url(${deathStranding})`,
        width: "555px",
        height: "328px",
        backgroundSize: "cover",
        position: "absolute",
        cursor: "pointer",
        border: "1px solid black",
        willChange: "transform, opacity",
        backdropFilter: 'blur(10px)'
    },
}))

export const FlippingCard = () => {
    const classes = useStyles()
    const [side, toggleSide] = useState(false);
    const animation = useSpring({
        opacity: side ? 1 : 0,
        transform: `perspective(600px) rotateX(${side ? 0 : 180}deg)`,
        config: {mass: 5, tension: 500, friction: 80},
    })
    return (
        <div className={classes.root} onClick={() => {
            toggleSide(prevState => !prevState)
        }}>
            <a.div className={classes.back} style={animation}/>
            <a.div className={classes.front} style={{
                opacity: animation.opacity.to(o => 1 - o),
                rotateX: "180deg",
                transform: animation.transform
            }}/>
        </div>
    );
};