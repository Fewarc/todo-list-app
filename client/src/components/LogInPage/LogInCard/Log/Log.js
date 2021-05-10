import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CardContent, Grid, TextField, Button, Typography, Fade } from '@material-ui/core';
import useStyles from './styles.js';
import { getUser } from '../../../../actions/logIn.js';

const Log = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const submitLogIn = (e) => {
        e.preventDefault();
        dispatch(getUser(user));
        clearUser();
    }

    const clearUser = () => {
        setUser({
        username: '',
        password: ''}
        )
    }

    return (
        <Fade in timeout={1000}>
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
                                value={user.username}
                                onChange={(e) => setUser({ ...user, username: e.target.value })}
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
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            >
                        </TextField>
                        </Grid>
                    </Grid>
                    </CardContent>
                    <CardContent className={classes.center}>
                        <Button variant="outlined" color="primary" onClick={(e) => submitLogIn(e)}>Log In</Button>
                    </CardContent>
                    
                </form>
            </div>
        </Fade>
    );
}

export default Log;