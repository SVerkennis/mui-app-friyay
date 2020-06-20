import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router} from 'react-router-dom';

import { ThemeProvider,createMuiTheme } from '@material-ui/core/styles';

function App() {

    // color for timeLineDots
    const newPalette = createMuiTheme ({
        palette: {
            primary: {
                main: '#f9a825',
            },
            secondary: {
                main: '#ff8b33',
            },
        },
    });


  return (
    <div className="App">
        <Router>
        <Header/>
        <ThemeProvider theme={newPalette}>
        <MainContent/>
        </ThemeProvider>
        </Router>

        <Footer/>
        </div>
  );
}

export default App;
