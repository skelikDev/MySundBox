import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {TransitionProps} from '@material-ui/core/transitions';
import {Link} from "@material-ui/core";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface IModal {
    modalOpen: boolean,
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    children: any,
    gitLink: string,
    title: string
}

export const Modal = ({modalOpen, setModalOpen, children, gitLink, title}: IModal) => {
    return (
        <div>
            <Dialog
                open={modalOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => {
                    setModalOpen(false)
                }}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {children}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <a target='_blank'
                        href={`https://github.com/skelikDev/MySundBox/blob/main/src/components/Demos/${gitLink}.tsx`}
                        onClick={(e)=>{
                            setTimeout(()=>{
                                setModalOpen(false)
                            }, 500)
                        }}
                    >
                        GITHUB
                    </a>
                    <Button onClick={(e) => {
                        setModalOpen(false)
                        console.log(e)
                    }}
                            color="primary">
                        CLOSE
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}