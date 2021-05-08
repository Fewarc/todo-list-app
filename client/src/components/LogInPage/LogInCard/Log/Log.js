import React, { useState } from 'react';
import { CardContent, Grid, TextField, Button, Typography } from '@material-ui/core';
import useStyles from './styles.js';


const Log = () => {
    const classes = useStyles();

    return (
        <div className={classes.cardInput}>
            <form>
                <CardContent>
                    <TextField 
                        className={classes.text}  
                        spellCheck={false} 
                        name="username" 
                        variant="outlined" 
                        label="username" 
                        >
                    </TextField>
                </CardContent>
                <CardContent>
                    <TextField 
                        className={classes.text} 
                        type="password"
                        spellCheck={false} 
                        name="password" 
                        variant="outlined" 
                        label="password" 
                        >
                    </TextField>
                </CardContent>

                <hr className={classes.line}></hr>

                <CardContent className={classes.center}>
                    <Button variant="outlined" color="primary" type="submit">Log In</Button>
                </CardContent>
                
            </form>
        </div>
    );
}

export default Log;