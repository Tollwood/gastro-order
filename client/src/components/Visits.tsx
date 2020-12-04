import React, { useEffect, useState } from "react";

import {getVisits} from "../API";
import { Visit } from "../type";
import CollapsibleTable from "./CollapsibleTable";
import { DateRangePicker, DateRange, DateRangeDelimiter, LocalizationProvider } from "@material-ui/pickers";
import DateFnsAdapter  from '@material-ui/pickers/adapter/date-fns';
import {subDays} from "date-fns";
import { TextField } from "@material-ui/core";

const Visists: React.FC = ()=>{
    
  const [value, setValue] = React.useState<DateRange<Date>>([subDays(new Date(),14), new Date()]);
    const [visits,setVisits] =useState<Visit[]>([]);
    useEffect(()=>{
        getVisits(getOrUndefined(value[0]),getOrUndefined(value[1 ])).then(res => setVisits(res.data.content));
    },[value]);
    
  return (
    <div>
      <h1>Kunden</h1>
      <LocalizationProvider dateAdapter={DateFnsAdapter}>
      <DateRangePicker
      inputFormat="dd.MM.yyyy"
      startText="Von"
      endText="Bis"
      value={value}
      onChange={(newValue:DateRange<Date>) => setValue(newValue)}
      renderInput={(startProps:any, endProps:any) => (
        <React.Fragment>
          <TextField  {...startProps}/>
          <DateRangeDelimiter> to </DateRangeDelimiter>
          <TextField {...endProps}/>
        </React.Fragment>
      )}
    />
    </LocalizationProvider>
      <CollapsibleTable items={visits}/>
    </div>
    
  )
}

const getOrUndefined = (date: Date | null): Date | undefined => {
  return date === null? undefined: date;
}
export default Visists;