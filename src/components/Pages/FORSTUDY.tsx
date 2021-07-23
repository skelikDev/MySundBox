import React, {useState} from 'react';
import {
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

const useStyles = makeStyles((theme) => ({
    root: {},
    pageContent: {
        width: '100vw',
        padding: "100px 0",
        overflow: "scroll",
        overflowX: "hidden",
    },
    collapseItem: {
        marginLeft: "2rem"
    }
}))

export const FORSTUDY = () => {
    const classes = useStyles()
    const listForStudy = useSelector((state: RootState) => state.forStudy.categories)
    const listChannels = useSelector((state: RootState) => state.forStudy.channels)
    const dispatch = useDispatch()
    let channelsList = listChannels.map(el => {
            let collapseList = el.array.map((col, index) => {
                return (
                    <Collapse className={classes.collapseItem} key={`${el.category}${index}`}   in={el.isOpen} timeout="auto" unmountOnExit>
                        <List   component="a" href={col}  target='_blank' disablePadding>
                            <ListItem   button>
                                <ListItemIcon>
                                    <SubscriptionsIcon/>
                                </ListItemIcon>
                                <ListItemText   primary={col}/>
                            </ListItem>
                        </List>
                    </Collapse>
                )
            })
            return <React.Fragment key={el.category}>
                <ListItem  button onClick={() => {
                    dispatch(isOpenAction(el.category))
                }}>
                    <ListItemIcon  >
                        <AddIcon key={`${el.category}IconIcon`}/>
                    </ListItemIcon>
                    <ListItemText  primary={el.category}/>
                </ListItem>
                {collapseList}
            </React.Fragment>
        }
    )
    let categoryList = listForStudy.map(el => {
            let collapseList = el.array.map((col, index) => {
                return (
                    <Collapse className={classes.collapseItem} key={`${el.category}${index}`}   in={el.isOpen} timeout="auto" unmountOnExit>
                        <List   component="a" href={col}  target='_blank' disablePadding>
                            <ListItem   button>
                                <ListItemIcon>
                                    <SubscriptionsIcon/>
                                </ListItemIcon>
                                <ListItemText   primary={col}/>
                            </ListItem>
                        </List>
                    </Collapse>
                )
            })
            return <React.Fragment key={el.category}>
                <ListItem  button onClick={() => {
                    dispatch(isOpenAction(el.category))
                }}>
                    <ListItemIcon  >
                        <AddIcon key={`${el.category}IconIcon`}/>
                    </ListItemIcon>
                    <ListItemText  primary={el.category}/>
                </ListItem>
                {collapseList}
            </React.Fragment>
        }
    )
    return (
       <div className={classes.pageContent}>
           <List
               component="nav"
               aria-labelledby="Category"
               subheader={
                   <ListSubheader component="div" id="nested-list-subheader">
                       Каналы
                   </ListSubheader>
               }
               className={classes.root}
           >
               {channelsList}
           </List>
           <List
               component="nav"
               aria-labelledby="Category"
               subheader={
                   <ListSubheader component="div" id="nested-list-subheader">
                       Плейлесты и каналы по категориям
                   </ListSubheader>
               }
               className={classes.root}
           >
               {categoryList}
           </List>
       </div>
    );
};
