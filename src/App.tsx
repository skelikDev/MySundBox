import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import {useSpring, animated} from 'react-spring'
import {Greetings} from "./components/Greetings/Greetings";
import {Container, createTheme, CssBaseline} from "@material-ui/core";
import {
   HashRouter as Router
} from "react-router-dom";
import * as PropTypes from "prop-types";


function ThemeProvider() {
    return null;
}

ThemeProvider.propTypes = {
    theme: PropTypes.any,
    children: PropTypes.node
};

function App() {

    return (
        <Router>

            <CssBaseline/>
            <div className="App">

                <Greetings/>

            </div>


        </Router>

    )
}

export default App
