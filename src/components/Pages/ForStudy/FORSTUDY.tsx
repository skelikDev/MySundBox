import React, {useState} from 'react';
import {
    Box,
    Button, ButtonGroup,
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
import {RootState} from "../../../redux/store";
import {isOpenAction} from "../../ForStudy/forStudySlicer";
import AddIcon from '@material-ui/icons/Add';
import {listForStudy, youtube} from "../listForStudy";
import {CardYoutube} from "./CardYoutube";

const useStyles = makeStyles((theme) => ({
    root: {},
    button: {
        margin: 8,
    }


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
// const categories = [
//     best
//     "funStuff",
//     "podCast",
//     "getStarted",
//     "jsBasic",
//     "jsPractice",
//     "patterns",
//     "node",
//     "gitHub",
//     "reactHooks",
// ]
export const FORSTUDY = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    // const card = <Box>{youtube.channels.map(el=> <Box><Car</Box>)}</Box>
    return (
        <Box>
            <ButtonGroup> {categories.map(el => <Button color={'primary'} className={classes.button}
                                                        variant={'contained'}>{el}</Button>)}</ButtonGroup>
            <Button onClick={() => {
                setOpen(!open)
            }}>Опен</Button>
            <Box>
                {/*{open? {card}: null}*/}<CardYoutube/>
            </Box>
        </Box>
    );
};
