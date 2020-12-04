import React, { useEffect, useState } from "react";
import Visits from "./Visits"
import { withAuthenticator } from '@aws-amplify/ui-react'
import {Auth} from "aws-amplify";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Box, Container } from "@material-ui/core";
import clsx from 'clsx';
import useStyles from "../useStyles";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Copyright from "./Copyright";

const Admin:React.FC = ()=>{
    let { path } = useRouteMatch();
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
        
        return (
          <div className={classes.root}>
            <Header open={open} onSidebarOpen={()=>setOpen(a => !a)} />
            <Sidebar open={open} onExpand={()=>setOpen(a => !a)}/>
            <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
        <Switch>
              <Route exact path={path}>
                <h3>Willkommen im Admin Bereich</h3>
              </Route>
              <Route path={`${path}/visits`}>
                <Visits />
              </Route>
            </Switch>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>                         
          </div>
        );
      }
      
export default withAuthenticator(Admin);