import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    line: {
        width: "85%",
        borderTop: "0px"
    },
    logCard: {
        height: "90vh",
        position: "relative"
    },
    anchor: {
        textDecoration: "underline",
        cursor: "pointer"
    },
    bottomText: {
        fontFamily: "Quicksand, sans-serif",
        fontSize: "calc(1.5vh + 0.5vw)",
        textAlign: "center"
    },
    bottomDiv: {
        textAlign: "center", 
        margin: "auto",
        position: "absolute",
        bottom: "0"
    }
  }));