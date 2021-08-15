import React from 'react';
import {Box, colors, Container, makeStyles} from "@material-ui/core";
import {Card} from "../../Card/Card";
import {LoadingDemos} from "./Demos/LoadingDemos";
import {FlippingCard} from "./Demos/FlippingCard";
import {cardsArray} from './Demos/cardsArray'

const useStyles = makeStyles((theme) => ({

    demoGridContainer: {

        display: "grid",
        gridGap: '40px',
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    },

}))

export const ANIMATION = () => {

    const classes = useStyles()
    let cards = cardsArray.map(el => <Card description={el.des} key={el.title} gitLink={el.componentName}
                                           title={el.title}>{<el.component/>}</Card>)
    return (

            <Box className={classes.demoGridContainer}>
                {cards}
            </Box>

    );
};