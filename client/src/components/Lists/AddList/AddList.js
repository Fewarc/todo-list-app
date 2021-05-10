import { Button, Card, CardActions, CardContent, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createList } from '../../../actions/lists.js'

import useStyles from './styles';

const AddList = () => {
    const loggedUser = useSelector( (state) => state.user );
    const classes = useStyles();
    const dispatch = useDispatch();

    const [listData, setListData] = useState({
        creator: loggedUser, 
        title: '',
        description: ''
    });

    useEffect( () => {setListData({...listData, creator: loggedUser})}, [loggedUser]);

    const clearListData = () => {
        setListData({
            creator: loggedUser, 
            title: '',
            description: ''
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createList(listData));
        clearListData();
    };
    
    return ( 
        <Card className={classes.card} variant="outlined">
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <CardContent className={classes.center} >
                    <TextField className={classes.text} value={listData.title} spellCheck={false} name="title" variant="outlined" label="Title" fullwidthvalue={listData.title} onChange={(e) => setListData({ ...listData, title: e.target.value})}  />
                </CardContent>
                <hr className={classes.line}></hr>
                <CardContent className={classes.center}>
                    <TextField className={classes.text} value={listData.description} spellCheck={false} name="description" multiline variant="outlined" label="Description" rows={4} fullwidthvalue={listData.description} onChange={(e) => setListData({ ...listData, description: e.target.value})}  />
                </CardContent>
                <CardContent className={classes.center}>
                    <Button variant="outlined" color="primary" type="submit">Create a new list</Button>
                </CardContent>
            </form>
        </Card>
    );
}

export default AddList;