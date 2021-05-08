import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles.js';

import LogInTime from './LogInTime/LogInTime.js';
import LogInCard from './LogInCard/LogInCard.js';

const LogInPage = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.mAuto}>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <LogInTime>
                    
                </LogInTime>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <LogInCard>
                    
                </LogInCard>
            </Grid>
        </Grid>
    );
}

export default LogInPage;