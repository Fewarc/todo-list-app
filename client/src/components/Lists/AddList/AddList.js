import { Button, Card, CardActions, CardContent, TextField, TextareaAutosize } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createList } from '../../../actions/lists.js'

import useStyles from './styles';

const AddList = () => {
    const classes = useStyles();

    const [listData, setListData] = useState({
        creator: '', 
        title: '',
        description: ''
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createList(listData));

        console.log(listData);
    };

    return ( 
        <Card className={classes.card} variant="outlined">
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <CardContent className={classes.center} >
                    <TextField className={classes.text}  spellCheck={false} name="title" variant="outlined" label="Title" fullwidthvalue={listData.title} onChange={(e) => setListData({ ...listData, title: e.target.value})}  />
                </CardContent>
                <hr className={classes.line}></hr>
                <CardContent className={classes.center}>
                    <TextField className={classes.text} spellCheck={false} name="description" multiline variant="outlined" label="Description" rows={4} fullwidthvalue={listData.description} onChange={(e) => setListData({ ...listData, description: e.target.value})}  />
                </CardContent>
                <CardContent className={classes.center}>
                    <Button variant="outlined" color="primary" type="submit">Create a new list</Button>
                </CardContent>
            </form>
        </Card>
    );
}

export default AddList;