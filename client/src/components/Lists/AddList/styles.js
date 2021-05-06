import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    card: {
        display: "flex",
        justifyContent: 'center',
        flexDirection: "column",
    },
    cBlock: {
        display: "block"
    },
    center: {
        display: "flex",
        justifyContent: 'center',
    },
    line: {
        width: "85%",
        borderTop: "0px"
    },
    text: {
        width: "100%",
    }
  }));