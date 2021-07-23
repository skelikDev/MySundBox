import React from 'react';
import {colors, Container, makeStyles} from "@material-ui/core";
import {Card} from "../Card/Card";
import {LoadingDemos} from "../Demos/LoadingDemos";
import {FlippingCard} from "../Demos/FlippingCard";
import {cardsArray} from '../Demos/cardsArray'

const useStyles = makeStyles((theme) => ({
    pageContent: {
		width: '100vw',
	   padding: "100px 0",
	   overflow: "scroll",
	   overflowX: "hidden",
    },
    demoGridContainer: {
	   display: "grid",
	   gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    },

}))

export const ANIMATION = () => {

    const classes = useStyles()
	let cards= cardsArray.map(el=> <Card description={el.des} key={el.title} gitLink={el.componentName} title={el.title}>{<el.component/>}</Card>)
    return (
	   <div className={classes.pageContent}>
		  <Container className={classes.demoGridContainer}>
			  {cards}
		  </Container>
	   </div>
    );
};