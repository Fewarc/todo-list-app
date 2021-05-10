import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, Checkbox, Button, Card, TextField, Typography, Fade } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import useStyles from './styles.js'
import { createNote } from '../../actions/notes.js';


const Lists = ({ list }) => {
    const classes = useStyles();
    const notes = useSelector( (state) => state.notes);
    const dispatch = useDispatch();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

    const [checked, setChecked] = useState([]);
    const [newNote, setNewNote] = useState('');

    const checkToggle = (index) => {
        checked[index] = !checked[index];
    };

    const addNote = (e) => {
        e.preventDefault();
        dispatch(createNote({listID: list._id, note: newNote}));
        setNewNote('');
    };

    return (
    <Fade in timeout={500}>
        <Card className={classes.modal} style={!matchesSM | !matchesMD ? ({width: "90%"}) : {}}>
            <List >
                <ListItem>
                    <ListItemText className={classes.center}>
                        <Typography style={ {fontFamily: "'Lobster', cursive", fontSize: "1.5rem", color: "#3F51B5"} }>{list.title}</Typography>
                    </ListItemText>
                </ListItem>
                {list.notes.map( (note) => {
                    const index = list.notes.findIndexOf(note);
                    return(
                        <ListItem key={index} role={undefined} dense button onClick={checkToggle(index)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked[index]}
                                    disableRipple
                                />
                            </ListItemIcon>
                            <ListItemText primary={`Line item ${list.title}`} />
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