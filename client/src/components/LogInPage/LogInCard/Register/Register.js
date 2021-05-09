import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Grid, TextField, CardContent, Button } from '@material-ui/core';
import useStyles from './styles.js';
import { createUser } from '../../../../actions/logIn.js';

const Register = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: ''
    });

    const submitSignUp = (e) => {
        e.preventDefault();

        dispatch(createUser(user));
        clearUser();
    } 

    const clearUser = () => {
        setUser({
        username: '',
        password: '',
        email: ''}
        )
    }

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
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
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
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
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
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            >
                            </TextField>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardContent className={classes.center}>
                    <Button variant="outlined" color="primary" onClick={(e) => submitSignUp(e)}>Sign up</Button>
                </CardContent>
            </form>
        </div>
    );
}

export default Register;