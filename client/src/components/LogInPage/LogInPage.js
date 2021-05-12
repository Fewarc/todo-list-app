import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles.js';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import LogInTime from './LogInTime/LogInTime.js';
import LogInCard from './LogInCard/LogInCard.js';

const LogInPage = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Grid container className={classes.mAuto}>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} style={(!matchesSM | !matchesMD) ? {display: "none"} : {}}>
                <LogInTime />
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <LogInCard />
            </Grid>
        </Grid>
    );
}

export default LogInPage;