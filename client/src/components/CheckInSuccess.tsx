import { Container, CssBaseline, Typography } from "@material-ui/core";
import React from "react";

import useStyles from "../useStyles";

const CheckInSuccess: React.FC =()=> {
    const classes = useStyles();
    return (
        <Typography component="h1" variant="h5">
          Vielen Dank! Geniessen Sie Ihren Aufenthalt
        </Typography>
    )
}

export default CheckInSuccess;