import React, { useState } from 'react';
import { CardContent, Grid, TextField, Button, Typography } from '@material-ui/core';
import useStyles from './styles.js';


const Log = () => {
    const classes = useStyles();

    return (
        <div className={classes.cardInput}>
            <form>
                <CardContent alignItems="stretch" style={{display: "inline"}}>
                <Grid container spacing={2} style={{display: "flex"}}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <TextField 
                            className={classes.text}  
                            spellCheck={false} 
                            name="username" 
                            variant="outlined" 
                            label="username" 
                            >
                        </TextField>
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField 
                        className={classes.text} 
                        type="password"
                        spellCheck={false} 
                        name="password" 
                        variant="outlined" 
                        label="password" 
                        >
                    </TextField>
                    </Grid>
                </Grid>
                </CardContent>
                <CardContent className={classes.center}>
                    <Button variant="outlined" color="primary" onClick={(e) => e.preventDefault}>Log In</Button>
                </CardContent>
                
            </form>
        </div>
    );
}

export default Log;