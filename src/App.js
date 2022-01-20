import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './Theme/useDarkMode';
import { lightTheme, darkTheme } from './Theme/theme';
import { GlobalStyles } from './Theme/global';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Components from './Components';
import './App.css';


function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div />;
  }

  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <Components.Header theme={theme} toggleTheme={toggleTheme} />
          <Switch>
            <Route exact path="/" component={Components.Home} />
            <Route path="/events" component={Components.Events} />
            <Route path="/team" component={Components.Team} />
            <Route path="/contactus" component={Components.ContactUs} />
            <Route path="/joinus" component={Components.JoinUs} />
            <Route path="*" component={Components.NotFound} />
          </Switch>
          <Components.Footer />
          <ul className="bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
