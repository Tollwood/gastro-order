import React, { useEffect, useState } from "react";
import useStyles from "../useStyles";

import {getVisits} from "../API";
import { Visit } from "../type";
import CollapsibleTable from "./CollapsibleTable";

const Visists: React.FC = ()=>{
    const classes = useStyles();
    const [visits,setVisits] =useState<Visit[]>([]);
    useEffect(()=>{
        getVisits().then(res => setVisits(res.data.content));
    },[]);
  return (
   <CollapsibleTable items={visits}/>
  )
}

export default Visists;