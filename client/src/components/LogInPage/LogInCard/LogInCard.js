import React, { useState } from 'react';
import { Card, Grid, TextField, AppBar, Toolbar, Typography, CardContent } from '@material-ui/core';
import useStyles from './styles.js';

import Log from './Log/Log.js';
import Register from './Register/Register.js';

const LogInCard = () => {
    const classes = useStyles();
    const [toggle, setToggle] = useState(true); // todo

   function toggleState(e) {
    e.preventDefault();
    setToggle(!toggle);
   }

    return (
        <Card className={classes.logCard} variant="outlined">
            <AppBar position="static" color="primary" style={{boxShadow: "none", alignItems: "center"}}>
                <Toolbar>
                    <Typography variant="h4" color="inherit" style={{fontFamily: "Quicksand, sans-serif"}}>
                        Welcome to //todo lists!
                    </Typography>
                </Toolbar>
            </AppBar>
            <hr className={classes.line}></hr>
            <CardContent style={{width: "80%", margin: "auto"}}>
                <Typography variant="h6" color="primary" style={{fontFamily: "Quicksand, sans-serif", fontSize: "calc(2.5vh + 0.5vw)"}}>
                //todo lists is a web-app to help you keep up with all the necessary tasks and chores.
                It is completely free and always will be. </Typography>
            </CardContent>
            <hr className={classes.line}></hr>
            {toggle ? ( <Log /> ) : ( <Register /> )}
            <CardContent className={classes.bottomDiv}>
                {toggle ? (
                    <Typography className={classes.bottomText} variant="" color="primary" >
                Don't have an account? - <a className={classes.anchor} onClick={(e) => toggleState(e)}>Register now!</a> </Typography>
                ) : (
                    <Typography className={classes.bottomText} variant="" color="primary" >
                already have an account? - <a className={classes.anchor} onClick={(e) => toggleState(e)}>Log In!</a> </Typography>
                )}
                <hr className={classes.line}></hr>
            </CardContent>
        </Card>
    );
}

export default LogInCard;