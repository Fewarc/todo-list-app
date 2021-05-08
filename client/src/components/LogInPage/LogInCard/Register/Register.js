import React, { useState } from 'react';
import { Card, Grid, TextField, CardContent, Button } from '@material-ui/core';
import useStyles from './styles.js';

const Register = () => {
    const classes = useStyles();
    let toggle = false; 

    return (
        <div className={classes.cardInput}>
            <form>
                <CardContent alignItems="stretch" style={{display: "inline"}}>
                    <Grid container spacing={2} style={{display: "flex"}}>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextField 
                            className={classes.text} 
                            spellCheck={false} 
                            name="username" 
                            variant="outlined" 
                            label="username" 
                            >
                            </TextField>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
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
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <TextField 
                            className={classes.text} 
                            spellCheck={false} 
                            name="email" 
                            variant="outlined" 
                            label="email" 
                            >
                            </TextField>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardContent className={classes.center}>
                    <Button variant="outlined" color="primary" onClick={(e) => e.preventDefault}>Sign up</Button>
                </CardContent>
            </form>
        </div>
    );
}

export default Register;