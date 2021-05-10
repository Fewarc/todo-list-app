import { Button, Card, Modal, CardContent, Typography, Fade } from '@material-ui/core';
import React, { useState } from 'react';
import Notes from '../../Notes/Notes.js';
import { useSelector, useDispatch } from 'react-redux';
import { createList } from '../../../actions/lists.js'

import useStyles from './styles';


const List = ({ list }) => {
    const classes = useStyles();                // TODO : add popovers / popups

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const notes = (
            <Notes list = {list}/>
    );

    return ( 
        <Fade in timeout={1000}>
            <Card className={classes.card} variant="outlined">
                <CardContent className={classes.center} >
                    <Typography style={ {fontFamily: "'Lobster', cursive", fontSize: "1.5rem", color: "#3F51B5"} }>{list.title}</Typography>
                </CardContent>
                <hr className={classes.line}></hr>
                <CardContent>
                    <Typography style={{fontFamily: "'Quicksand', sans-serif"}}>{list.description}</Typography>
                </CardContent>
                <CardContent className={classes.center}>
                    <Button style={{margin: "0.5rem"}} variant="outlined" color="primary" onClick={handleOpen}>Show</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        {notes}
                    </Modal>
                    <Button style={{margin: "0.5rem"}} variant="outlined" color="primary" onClick={(e) => e.preventDefault()}>Delete</Button>
                </CardContent> 
            </Card>
        </Fade>
    );
}

export default List;