import React, {useState} from 'react';
import {
    Box,
    Button, Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia, IconButton,
    makeStyles, Modal, TextField,
    Typography
} from "@material-ui/core";
import logo from '../../../assets/image 7.png'
import {channels, youtube} from "../listForStudy";
import {a} from "react-spring";
import {Favorite, FavoriteBorderOutlined} from "@material-ui/icons";


interface CardProp {

}

const useStyle = makeStyles({
    root: {
        width: 400
    },
    description: {
        height: 150,
        overflowY: "auto"
    },
    actionsCard:{
        display: "flex",
        maxWidth: "100%",
        overflow: 'hiden'
    },
    modalWrapper: {
        borderRadius: 10,
        position: "fixed",
        top: "50%",
        left: "50%",
        background: "white"
    },
    modalText: {
        margin: 50,
    },
    notes:{
        flexGrow:1,
        textOverflow: "ellipsis",
    }
})
export const CardYoutube = () => {
    const c = useStyle()
    const [isFavorite, setFavorite] = useState(false);
    const [openModal, setModal] = useState(false)
    const [note, setNote] = useState('My Notes')
    const link = youtube.channels[0].link
    const name = youtube.channels[0].name
    const category = youtube.channels[0].category
    const favorite = youtube.channels[0].favorite
    const description = youtube.channels[0].description
    const notes = youtube.channels[0].notes

    return (
        <Card className={c.root}>
            <CardActionArea onClick={() => {
                setTimeout(() => {
                    return window.open(link, "_blank")
                }, 500)
            }
            }>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={logo}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography className={c.description} variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={c.actionsCard}>
                <IconButton onClick={() => {
                    setFavorite(!isFavorite)
                }}>
                    {isFavorite ? <Favorite/> : <FavoriteBorderOutlined/>}
                </IconButton>
                <Button size="small" color="primary" onClick={() => {
                    setModal(true)
                }}>
                    Note
                </Button>
                <Box>
                    {note}
                </Box>
                <Modal
                    open={openModal}
                    onClose={() => {
                        setModal(false)
                    }}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <Box className={c.modalWrapper}>
                        <TextField
                            className={c.modalText}
                            id="outlined-multiline-static"
                            label="My Notes"
                            multiline
                            rows={4}
                            value={note}
                            onChange={(e) => {
                                setNote(e.target.value)
                            }}
                            variant="outlined"
                        />
                        <Button    onClick={() => {
                            setModal(false)
                        }}>Save</Button>
                    </Box>
                </Modal>
            </CardActions>
        </Card>
    );
};
