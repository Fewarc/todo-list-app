import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './styles.js';

const LogInTime = () => {
    const classes = useStyles();
    const week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    const date = new Date();

    const normalize = (timePart) => {
        return timePart < 10 ? ['0', timePart].join('') : timePart;
    }

    const [time, setTime] = useState({
        day: week[date.getDay()],
        date: [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('/'),
        time: [date.getHours(), normalize(date.getMinutes()), normalize(date.getSeconds())].join(':'),
    });

    const updateTime = () => {
        const date = new Date();
        const hour = date.getHours();
        const minu = normalize(date.getMinutes());
        const sec = normalize(date.getSeconds());

        setTime({
            ...time,
            time: [hour, minu, sec].join(':'),
        });
    }

    setInterval(updateTime, 1000);

    return (
        <Card className={classes.timeCard} variant="outlined">
            <CardContent className={classes.timeContent}>
                <Typography className={classes.timeText}>{time.day}</Typography>
                <Typography className={classes.timeText}>{time.date}</Typography>
                <Typography className={classes.timeText}>{time.time}</Typography>
            </CardContent>
        </Card>
    );
}

export default LogInTime;