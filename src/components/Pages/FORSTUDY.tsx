import React, {useState} from 'react';
import {
    Button,
    Collapse,
    Container,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    makeStyles,
    Typography
} from "@material-ui/core";
import {ExpandLess, ExpandMore, StarBorder} from "@material-ui/icons";
import SendIcon from '@material-ui/icons/Send';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {isOpenAction} from "../ForStudy/forStudySlicer";
import AddIcon from '@material-ui/icons/Add';
import {listForStudy} from "./listForStudy";

const useStyles = makeStyles((theme) => ({
    root: {},


}))
const categories = [
    "good",
    "super",
    "eng",
    "funStuff",
    "podCast",
    "getStarted",
    "jsBasic",
    "jsPractice",
    "patterns",
    "node",
    "gitHub",
    "reactHooks",
]
export const FORSTUDY = () => {
    const classes = useStyles()

    return (
        <>
            {categories.map(el => <Button>{el}</Button>)}
        </>
    );
};
