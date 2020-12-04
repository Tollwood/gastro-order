import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Copyright from './Copyright';
import HouseholdRegistration from './HouseholdRegistration';
import { DatePicker, TimePicker, LocalizationProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Paper } from '@material-ui/core';
import useStyles from '../useStyles';
import {addVisit} from "../API";
import { Household, Visit } from '../type';
import { useLocation } from 'react-router-dom';
import CheckInSuccess from './CheckInSuccess';
import DateFnsAdapter from '@material-ui/pickers/adapter/date-fns'; 
import TextField from '@material-ui/core/TextField/TextField';


export default function GuestRegistration() {
  
  const classes = useStyles();
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  
  const query = useQuery();
  
  const [households, setHouseholds] = useState<Household[]>([{firstName:"", lastName:"",phone:"",guestsCount:1}])
  const [completed,setCompleted] = useState<boolean>(false);
  const [selectedDate,setSelectedDate] = useState<Date>(new Date());
  

  
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
        <img src={`${process.env.PUBLIC_URL} /logo-demo.svg`} alt="logo"/>
        <Typography component="h1" variant="h5">
          Coronabedingte Gäste-Registrierung
        </Typography>
        {completed && <CheckInSuccess/>}
        {!completed &&
        <form className={classes.form} noValidate>
          <Grid container spacing={2} >
            <Grid item xs={12}>
            <Paper className={classes.paper}>
            <Grid container spacing={2}>
          <LocalizationProvider dateAdapter={DateFnsAdapter}>
            
          <Grid item xs={12} sm={6}>
          <DatePicker 
          label="Datum"
          value={selectedDate}
          disabled
          renderInput={(props) => <TextField {...props} />}
          onChange={()=>{}}
        />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TimePicker
          label="Von"
          value={selectedDate}
          ampm={false}
          onChange={newDate=> setSelectedDate(newDate || selectedDate)}
          renderInput={(props) => <TextField {...props} />}
        />
            </Grid>
            </LocalizationProvider>
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
            disabled={households.length === 0 }
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=> {
              const visit: Visit = {from: selectedDate, households: households, table:query.get("table")|| "1"}
              addVisit(visit).then(()=>setCompleted(true)); 
              
                        }            }
          >
            Speichern
          </Button>
          
          </Grid>
          </Grid>
        </form>
        }
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}