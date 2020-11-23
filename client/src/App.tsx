import React, { useEffect, useState } from "react";
import {  createMuiTheme, ThemeProvider } from "@material-ui/core";
import GuestRegistration from "./components/GuestRegistration";

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
      <GuestRegistration/>
    </main>
    </ThemeProvider>
  );
};

export default App;
