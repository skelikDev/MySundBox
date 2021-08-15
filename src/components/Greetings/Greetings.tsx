import React, {useState} from 'react';
import {Container, Divider, IconButton, makeStyles, Toolbar} from "@material-ui/core";
import {ANIMATION} from "../Pages/Animation/ANIMATION";
import {SwipeableDrawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Menu} from "../NavComp/Menu";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Appbar} from "../NavComp/Appbar";
import {FORSTUDY} from "../Pages/ForStudy/FORSTUDY";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#FFDEE9",
        backgroundImage: " linear-gradient(315deg, #FFDEE9 0%, #B5FFFC 100%)",
    },
    flexWrapper: {
        display: "flex",
        width: "100vw",
        height: "100vh",
        overflowY: "auto",
        maxWidth: '100vw',
    },
    pageContent: {
        padding: "100px 8px",
        borderLeft: "1px solid rgba(255,255,200,0.5)",
        background: "rgba(255,255,255,0.2)",
    },
    navSpace: {},

}))

export const Greetings = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Appbar setMenuOpen={setMenuOpen}/>
            <div className={classes.flexWrapper}>
                <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}/>
                <Switch>
                    <Container>
                        <div className={classes.pageContent}>
                            <Route exact path={'/animation'} component={ANIMATION}/>
                            <Route exact path={'/forStudy'} component={FORSTUDY}/>
                        </div>
                    </Container>
                </Switch>
            </div>
        </div>
    );
};

.1204