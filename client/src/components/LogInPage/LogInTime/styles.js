import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    line: {
        width: "85%",
        borderTop: "0px"
    },
    timeCard: {
        height: "90vh",
        position: "relative",
        background: "transparent",
        border: "none",
    },
    timeText: {
        fontFamily: "'Lobster', cursive",
        fontSize: "7.5vmax",
        color: "#3F51B5",
    },
    timeContent: {
        position: 'absolute',
        top: "50%",
        left: "0",
        transform: "translateY(-50%)",
    }
  }));