import {  Grid, Paper, TextField } from "@material-ui/core";

import React from "react";
import useStyles from "../useStyles";

export interface Household {
  firstName?: string,
  lastName?: string,
  phone?:string,
  guestsCount?: number,
}

interface Props {
  household: Household,
  onChange: (household: Household) => void
  number: number
  onDelete: (index:number) => void
}



const HouseholdRegistration: React.FC<Props> = (props:Props)=>{
  const classes = useStyles();
return <Grid item xs={12} >
      <Paper className={classes.paper}>
      <Grid container spacing={2}>
      <Grid item xs={11} >
        <h4>Haushalt {props.number} </h4>
        </Grid>
        <Grid item xs={1} >
        <div onClick={()=> props.onDelete(props.number)}>X</div>
        </Grid>
        <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                variant="outlined"
                required
                fullWidth
                value={props.household.firstName}
                id="firstName"
                label="Vorname"
                onChange={(e => props.onChange({...props.household, firstName: e.currentTarget.value}))}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Nachname"
                name="lastName"
                value={props.household.lastName}
                onChange={(e => props.onChange({...props.household, lastName: e.currentTarget.value}))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Telefon"
                name="phone"
                value={props.household.phone}
                onChange={(e => props.onChange({...props.household, phone: e.currentTarget.value}))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="guestsCount"
                label="Anzahl Gäste (Haushalt)"
                type="number"
                id="num-guests"
                value={props.household.guestsCount}
                onChange={(e => props.onChange({...props.household, guestsCount: Number.parseInt(e.currentTarget.value) }))}
              />
            </Grid>
            </Grid>
            </Paper>
            </Grid>
}

export default HouseholdRegistration;
