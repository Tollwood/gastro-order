import { Container, CssBaseline, Typography } from "@material-ui/core";
import React from "react";

import useStyles from "../useStyles";

const CheckInSuccess: React.FC =()=> {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={`${process.env.PUBLIC_URL} /logo-demo.svg`}/>
        <Typography component="h1" variant="h5">
          Vielen Dank! Geniessen Sie Ihren Aufenthalt
        </Typography>
        </div>
        </Container>
    )
}

export default CheckInSuccess;