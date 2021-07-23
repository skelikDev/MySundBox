import React, {useState} from 'react';
import {Divider, IconButton, makeStyles, Toolbar} from "@material-ui/core";
import {ANIMATION} from "../Pages/ANIMATION";
import {SwipeableDrawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Menu} from "../NavComp/Menu";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Appbar} from "../NavComp/Appbar";

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
				<Route exact path={'/animation'} component={ANIMATION}/>
			 </Switch>
		  </div>
	   </div>
    );
};