import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    mrg: {
      padding: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        marginTop: "8rem",
      },
      [theme.breakpoints.down('sm')]: {
        marginTop: "4rem",
      },
      [theme.breakpoints.up('md')]: {
        marginTop: "5rem",
      },
      [theme.breakpoints.up('lg')]: {
        marginTop: "7rem",
      },
    },
    root: {
        flexGrow: "1"
    }
  }));