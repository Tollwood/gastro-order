import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      
    paper: {
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        padding: theme.spacing(2),
      },
    }
  }));

  export default useStyles;