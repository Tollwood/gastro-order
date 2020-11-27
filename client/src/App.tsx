import React from "react";
import {  createMuiTheme, ThemeProvider } from "@material-ui/core";
import GuestRegistration from "./components/GuestRegistration";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Admin from "./components/Admin";

const App: React.FC = () => {
  
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#ca001b",
      },
      secondary: {
        main: "#6c757d",
      },
    },
  });

  
  return (
    <ThemeProvider theme={theme}>
    <main className="App">
    <Router>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <GuestRegistration />
          </Route>
        </Switch>
    </Router>  
    </main>
    </ThemeProvider>
  );
};


export default App
