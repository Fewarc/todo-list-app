import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActions, CardContent, Fab, Grid, Typography, Paper } from '@material-ui/core';
import AddList from './AddList/AddList';
import List from './List/List';

import useStyles from './styles.js'


const Lists = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const allLists = useSelector( (state) => state.lists);

    return (
    <div className={classes.mrg}>
        <Grid container spacing={3}>
            {allLists.map( (list) => {
            return (
            <Grid key={list._id} item xs={12} sm={6} md={4} lg={3} xl={2}>
                <List key={list._id} list={list}/>
            </Grid>)
            })}
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <AddList />
            </Grid>
        </Grid>
    </div>
    );
}

export default Lists;