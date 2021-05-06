import { Button, Card, CardActions, CardContent, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createList } from '../../../actions/lists.js'

import useStyles from './styles';

const List = ({ list }) => {
    const classes = useStyles();

    return ( 
        <Card className={classes.card} variant="outlined">
                <CardContent className={classes.center} >
                    <Typography>{list.title}</Typography>
                </CardContent>
                <hr className={classes.line}></hr>
                <CardContent className={classes.center}>
                    <Typography>{list.description}</Typography>
                </CardContent>
                {/* <CardContent className={classes.center}>
                    <Button variant="outlined" color="primary" type="submit">Create a new list</Button>
                </CardContent> */}
        </Card>
    );
}

export default List;