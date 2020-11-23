import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Copyright from './Copyright';
import HouseholdRegistration, { Household } from './HouseholdRegistration';
import { KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { ReactComponent as Logo } from '../logo.svg';
import { Paper } from '@material-ui/core';
import useStyles from '../useStyles';


export default function GuestRegistration() {
  
  const classes = useStyles();

  const [households, setHouseholds] = useState<Household[]>([{}])
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(),
  );
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const onDelete = (number:number) => {
    
    setHouseholds(prev => prev.filter((h,i) => i !== number-1))
  }

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Logo/>
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
          onChange={handleDateChange}
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
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
            </Grid>
            </MuiPickersUtilsProvider>
            <Grid item xs={12}>
              <TextField
                name="tableNum"
                variant="outlined"
                required
                fullWidth
                id="table-num"
                label="Tischnummer"
                autoFocus
              />
            </Grid>
            </Grid>
            </Paper>
            </Grid>

              {households.map((h,i) => <HouseholdRegistration key={i} household={h} number={i+1} onChange={uh => console.log(uh)} onDelete={onDelete}/>)}
          
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
            onClick={()=>console.log(households)}
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