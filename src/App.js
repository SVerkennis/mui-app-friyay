import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

import { ThemeProvider,createMuiTheme } from '@material-ui/core/styles';

function App() {

    // color for timelinedots
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

        <Header/>

        <ThemeProvider theme={newPalette}>
        <MainContent/>
        </ThemeProvider>

        <Footer/>
        </div>
  );
}

export default App;
