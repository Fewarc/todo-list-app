import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    modal: {
      position: 'absolute',
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "40%"
    },
    noteTextField: {
        width: "100%",
        marginLeft: "5%"
    },
    center: {
      display: "flex",
      justifyContent: "center"
    }
  }));