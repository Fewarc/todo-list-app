import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    card: {
        display: "flex",
        justifyContent: 'center',
        flexDirection: "column",
    },
    cBlock: {
        display: "block",
    },
    center: {
        display: "flex",
        justifyContent: 'center',
    },
    line: {
        width: "100%",
        borderTop: "0px",
    },
    text: {
        width: "100%",
    },
    cardInput: {
        width: "80%",
        margin: "auto"
    },
  }));