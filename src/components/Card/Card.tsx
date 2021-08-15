import React, {useState} from 'react';
import {Button, colors, Divider, IconButton, makeStyles, Typography} from "@material-ui/core";
import DescriptionIcon from '@material-ui/icons/Description';
import {Modal} from "./Modal";

const useStyles = makeStyles((theme) => ({
    demoContainer: {
        minWidth:300,
        background: "rgba(184,184,184,0.1)",
        border: "1px solid rgba(184,184,184,0.5)",
        borderRadius: "10px",
    },
    demoHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50px",
        padding: '5px 0',
    },
    title: {
        flexGrow: 1,
        fontWeight:600,
        color:colors.blueGrey.A700
    },
    line: {
        margin: "0 10%",
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        border: 'none',
    },
    demoContent: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(184,184,184,0.1)",
        height: "400px",
        borderRadius: "5px",
    },
    icon: {
        position:"relative",
        fontSize: '1.4rem',
        top: ".1rem",
        marginRight: "0.5rem",
        color: colors.blueGrey.A700
    }
}))

interface ICard {
    title: string,
    children: any,
    description: string,
    gitLink: string,
}

export const Card = ({title, children, description, gitLink}: ICard) => {
    const [modalOpen, setModalOpen] = useState(false);
    const classes = useStyles()
    return (
        <div className={classes.demoContainer}>
            <div className={classes.demoHeader}>
                <Button
                    variant="outlined"
                    onClick={() => {
                        setModalOpen(true)
                    }}
                    className={classes.button}
                ><Typography variant={"h5"} className={classes.title} noWrap
                             component={"h5"}><DescriptionIcon className={classes.icon}/>{title}</Typography></Button>
                {/*<IconButton  aria-label="modalOpen" onClick={() => {*/}
                {/*    setModalOpen(true)*/}
                {/*}}>*/}
                {/*    <DescriptionIcon style={{fontSize: '2rem'}}/>*/}
                {/*</IconButton>*/}
                {/*<Typography variant={"h3"} className={classes.title}  noWrap component={"h3"}>{title}</Typography>*/}
            </div>
            <Divider className={classes.line}/>
            <div className={classes.demoContent}>{children}</div>
            <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} gitLink={gitLink} title={title}>
                {description}
            </Modal>
        </div>
    );
};