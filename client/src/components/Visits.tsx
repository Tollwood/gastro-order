import React, { useEffect, useState } from "react";

import {getVisits} from "../API";
import { Visit } from "../type";
import CollapsibleTable from "./CollapsibleTable";

const Visists: React.FC = ()=>{
  
    const [visits,setVisits] =useState<Visit[]>([]);
    useEffect(()=>{
        getVisits().then(res => setVisits(res.data.content));
    },[]);
  return (
    <CollapsibleTable items={visits}/>
  )
}

export default Visists;