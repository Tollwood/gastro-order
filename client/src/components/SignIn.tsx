import React from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import useStyles from '../useStyles';
import { Grid, Paper, Typography } from '@material-ui/core';

const SignIn:React.FC = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={`${process.env.PUBLIC_URL} /logo-demo.svg`}/>
        <Typography component="h1" variant="h5">
          SignIn
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2} >
            <Grid item xs={12}>
            <Paper className={classes.paper}>
            <Grid container spacing={2}>
            
            </Grid>
            <Grid item xs={12} sm={6}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=> {
              console.log("do login");
              
                        }            }
          >
            SignIn
          </Button>
          </Grid>
            </Paper>
            </Grid>
            </Grid>
            </form>
      
      </div>
      </Container>
  )    
}

const doSignIn = ()=>{
  console.log("do signin");
}
export default SignIn;