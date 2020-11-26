import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Copyright from './Copyright';
import HouseholdRegistration from './HouseholdRegistration';
import { KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Paper } from '@material-ui/core';
import useStyles from '../useStyles';
import {addVisit} from "../API";
import { Household, Visit } from '../type';
import { useHistory, useLocation, useParams } from 'react-router-dom';

export default function GuestRegistration() {
  
  const classes = useStyles();
  const history = useHistory();
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  
  const query = useQuery();
  
  const [households, setHouseholds] = useState<Household[]>([{firstName:"", lastName:"",phone:"",guestsCount:1}])
  const selectedDate = new Date();

  
  const onDelete = (number:number) => {
    
    setHouseholds(prev => prev.filter((h,i) => i !== number-1))
  }

  const updateHousehold = (h: Household, i:number) =>{
      const newHouseHolds = [...households];
      newHouseHolds[i] = h;
      setHouseholds(newHouseHolds);
  }
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={`${process.env.PUBLIC_URL} /logo-demo.svg`}/>
        <Typography component="h1" variant="h5">
          Coronabedingte Gäste-Registrierung
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2} >
            <Grid item xs={12}>
            <Paper className={classes.paper}>
            <Grid container spacing={2}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            
          <Grid item xs={12} sm={6}>
          <KeyboardDatePicker 
          margin="normal"
          id="date-picker-dialog"
          label="Datum"
          fullWidth
          format="dd.MM.yyyy"
          value={selectedDate}
          disabled
          onChange={()=>{}}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
            </Grid>
            <Grid item xs={12} sm={6}>
            <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Von"
          fullWidth
          value={selectedDate}
          ampm={false}
          onChange={()=>{}}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
            </Grid>
            </MuiPickersUtilsProvider>
            </Grid>
            </Paper>
            </Grid>

              {households.map((h,i) => <HouseholdRegistration key={i} household={h} number={i+1} onChange={uh => updateHousehold(uh,i)} onDelete={onDelete}/>)}
          
          <Grid item xs={12} sm={6}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={()=> setHouseholds(prev => [...prev, {} as Household])}
          >
            weiterer Haushalt
          </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=> {
              const visit: Visit = {from: selectedDate, households: households, table:query.get("table")|| ""}
              addVisit(visit).then(()=>history.push("check-in/success")); 
              
                        }            }
          >
            Speichern
          </Button>
          </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}