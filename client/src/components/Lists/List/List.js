import { Button, Card, Modal, CardContent, Typography, Fade } from '@material-ui/core';
import React, { useState } from 'react';
import Notes from '../../Notes/Notes.js';
import { useSelector, useDispatch } from 'react-redux';
import { getNotes, saveNotes } from '../../../actions/notes.js';
import { deleteList } from '../../../actions/lists.js';

import useStyles from './styles';


const List = ({ list }) => {
    const classes = useStyles();
    const allNotes = useSelector( (state) => state.notes);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
        dispatch(getNotes(list._id));
    };

    const handleClose = () => {
        setOpen(false);
        dispatch(saveNotes({notes: allNotes, listID: list._id}));
    };

    const handleDelete = (e) => {
        e.preventDefault();
        console.log({listID: list._id, creator: list.creator});
        dispatch(deleteList({listID: list._id, creator: list.creator}));
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
                    <Button style={{margin: "0.5rem"}} variant="outlined" color="primary" onClick={(e) => handleDelete(e)}>Delete</Button>
                </CardContent> 
            </Card>
        </Fade>
    );
}

export default List;