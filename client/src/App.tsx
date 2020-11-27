import React from "react";
import {  createMuiTheme, ThemeProvider } from "@material-ui/core";
import GuestRegistration from "./components/GuestRegistration";
import Visits from "./components/Visits";

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import CheckInSuccess from "./components/CheckInSuccess";
import SignIn from "./components/SignIn";
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
      <Route path="/check-in/success" exact>
        <CheckInSuccess/>
      </Route>
      <Route path="/check-in" exact>
        <GuestRegistration/>
      </Route>
      <Route path="/visits" exact>
        <Visits/>
      </Route>
      <Route path="/signin" exact>
        <SignIn/>
      </Route>
      <Route path="/" exact>
        <GuestRegistration/>
      </Route>
      </Router>
      
    </main>
    </ThemeProvider>
  );
};

export default App;
