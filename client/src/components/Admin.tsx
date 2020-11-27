import React from "react";
import Visits from "./Visits"
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
const Admin:React.FC = ()=>{
    let { path, url } = useRouteMatch();
      
        return (
          <div>
            <AmplifySignOut />
             <div>Admin Bereich</div>
            <Switch>
              <Route exact path={path}>
                <h3>Willkommen im Admin</h3>
                <ul>
              <li>
                <Link to={`${url}/visit`}>Besuche</Link>
              </li>
            </ul>
              </Route>
              <Route path={`${path}/visit`}>
                <Visits />
              </Route>
            </Switch>
          </div>
        );
      }
      
export default withAuthenticator(Admin);