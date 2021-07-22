import React, {useState} from 'react';
import {
    Box,
    Link,
    Container,
    makeStyles,
    SwipeableDrawer,
    Typography,
    Button,
    Divider,
    colors
} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import Brightness6Icon from '@material-ui/icons/Brightness6';
import {useSpring, a, config} from 'react-spring';


const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: "20vw",
        height: "100%",
        backgroundColor: "rgba(255,235,240, 0.8)",
        // backgroundColor: "rgba(200,255,252)",
        backgroundImage: " linear-gradient(45deg, rgba(200,255,252, 0.8) 0%, rgba(255,235,240, 0.8) 100%)",
    },
    menuContent: {
        paddingTop: '64px',
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
}))

interface IMenu {
    isMenuOpen: boolean,
    setMenuOpen: any
}

export const Menu = ({isMenuOpen, setMenuOpen}: IMenu) => {
    const classes = useStyles()
    const animatedIcon = useSpring({
        loop: true,
        config: {duration: 1000},
        from: {
            fontSize: "2.5rem",
            scale: "1",
            rotate: 0,
        },
        to: {
            fontSize: "2.5rem",
            scale: "1.3",
            rotate: 360

        },

    })
    const AnimatedBrightness6Icon = a(Brightness6Icon)
    const  linkClose =()=>{
    setMenuOpen(false)
    }
    return (
        <SwipeableDrawer
            onClose={() => {
                setMenuOpen(false)
            }}
            onOpen={() => {
                setMenuOpen(true)
            }}
            open={isMenuOpen}>
            <Container fixed maxWidth={"lg"} className={classes.wrapper}>
                <div className={classes.menuContent}>

                    <Button component={NavLink} to="/animation" onClick={() => {
                       setTimeout(linkClose,500)
                    }}
                            startIcon={<AnimatedBrightness6Icon style={animatedIcon}/>}>
                        <Typography variant="h3" component="h3">
                            Animation
                        </Typography>
                    </Button>
                </div>

            </Container>

        </SwipeableDrawer>
    );
};
