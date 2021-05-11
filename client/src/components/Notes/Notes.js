import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction,  } from '@material-ui/core';
import { IconButton, Checkbox, Button, Card, TextField, Typography, Fade } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import useStyles from './styles.js'
import { createNote, saveNotes, localUpdate } from '../../actions/notes.js';


const Lists = ({ list }) => {
    const classes = useStyles();
    const notes = useSelector( (state) => state.notes);
    const dispatch = useDispatch();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

    const [newNote, setNewNote] = useState('');
    const [toggle, setToggle] = useState(false);

    const addNote = (e) => {
        e.preventDefault();
        dispatch(saveNotes({notes: notes, listID: list._id}));
        dispatch(createNote({listID: list._id, note: newNote}));
        setNewNote('');
    };

    const clickCheckbox = (e, note) => {
        e.preventDefault();
    
        const index = notes.findIndex(el => el._id === note._id);
        const newNoteVal = { done: !notes[index].done, _id: notes[index]._id, note: notes[index].note };
        const newNotes = notes;
        newNotes[index] = newNoteVal;
        
        dispatch(localUpdate(newNotes));
        
        setToggle(!toggle); // forced update
    }

    const clickDelete = (e, id) => {
        e.preventDefault();

        const filtered = notes.filter(el => el._id != id);
        dispatch(localUpdate(filtered));

        setToggle(!toggle); // forced update
    }


    return (
    <Fade in timeout={500}>
        <Card className={classes.modal} style={!matchesSM | !matchesMD ? ({width: "90%"}) : {}}>
            <List >
                <ListItem>
                    <ListItemText className={classes.center}>
                        <Typography style={ {fontFamily: "'Lobster', cursive", fontSize: "1.5rem", color: "#3F51B5"} }>{list.title}</Typography>
                    </ListItemText>
                </ListItem>
                {notes.map( (singleNote) => {
                    const noteID = singleNote._id;
                    return(
                        <ListItem key={noteID} className={classes.center} style={{width: "90%", margin: "auto"}} role={undefined} dense >
                            <ListItemIcon >
                                <Checkbox
                                    edge="start"
                                    color="primary"
                                    checked={singleNote.done}
                                    disableRipple
                                    onClick={(e) => clickCheckbox(e, singleNote)}
                                />
                            </ListItemIcon>
                            <ListItemText style={singleNote.done ? ({fontFamily: "'Quicksand', sans-serif", textDecoration: "line-through"}) : (({fontFamily: "'Quicksand', sans-serif"}))} primary={`${singleNote.note}`} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={(e) => clickDelete(e, noteID)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )
                })}
                <ListItem>
                    <ListItem role={undefined} dense>
                            <ListItemIcon>
                                <Button color="primary" variant="outlined" type="submit" onClick={(e) => addNote(e)}>
                                    +
                                </Button>
                            </ListItemIcon>
                            <TextField className={classes.noteTextField} value={newNote} spellCheck={false} name="newNote" multiline onChange={(e) => setNewNote(e.target.value)} ></TextField>
                        </ListItem>
                </ListItem>
            </List>
        </Card>
    </Fade>
    );
}

export default Lists;