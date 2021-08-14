import React from 'react';
import {AppBar, Box, colors, Container, Divider, IconButton, makeStyles, Toolbar} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useMeasure from "react-use-measure";


const useStyles = makeStyles((theme) => ({
    wrapper: {
 	   backgroundImage: "linear-gradient(45deg, rgba(255,162,227,0.77) 0%, rgba(166,193,238,0.5) 100%)",
		backdropFilter: "blur(10px)"
    },
}))
interface IAppbar {
	setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const Appbar = ({setMenuOpen}:IAppbar) => {
    const [ref, {width, height}]= useMeasure()
    const classes = useStyles()
    return (
		  <AppBar ref={ref} position='absolute' className={classes.wrapper} color={'transparent'} elevation={0}>
			<Container>
				<Toolbar>
					<IconButton onClick={() => {
						setMenuOpen(true)
					}}>
						<MenuIcon/>
					</IconButton>

					<h1>SundBox</h1>
				</Toolbar>
			</Container>

			 <Divider/>
		  </AppBar>
    )
	   ;
};