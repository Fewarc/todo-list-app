import React, { useState } from 'react';
import { Card, Grid, TextField } from '@material-ui/core';
import useStyles from './styles.js';

const Register = () => {
    const classes = useStyles();
    let toggle = false; 

    return (
        <form>
            <TextField 
                className={classes.text}  
                spellCheck={false} 
                name="username" 
                variant="outlined" 
                label="username" 
                >
            </TextField>
            <hr className={classes.line}></hr>
            <hr className={classes.line}></hr>
            <hr className={classes.line}></hr>
            <hr className={classes.line}></hr>
            <hr className={classes.line}></hr>
            <hr className={classes.line}></hr>

        </form>
    );
}

export default Register;