import React, {useState} from 'react';
import {Button, Divider, IconButton, makeStyles, Typography} from "@material-ui/core";
import DescriptionIcon from '@material-ui/icons/Description';
import {Modal} from "./Modal";

const useStyles = makeStyles((theme) => ({
    demoContainer: {
        maxWidth: "100%",

        background: "rgba(184,184,184,0.2)",
        border: "1px solid rgba(184,184,184,0.5)",
        borderRadius: "10px",
    },
    demoHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50px",
        padding: '5px 2rem',
    },
    title: {
        flexGrow: 1,
    },
    line: {
        margin: "0 10%",
    },
    button: {
        width: '100%'
    },
    demoContent: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(184,184,184,0.2)",
        height: "400px",
        borderRadius: "5px",

    },
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
                    endIcon={<DescriptionIcon style={{fontSize: '2rem'}}/>}
                ><Typography variant={"h3"} className={classes.title} noWrap
                             component={"h3"}>{title}</Typography></Button>
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