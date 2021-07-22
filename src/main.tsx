import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {createTheme, MuiThemeProvider} from "@material-ui/core";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Nunito',
            'sans-serif'
        ].join(','),
    },
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App/>
    </MuiThemeProvider>
    ,
    document.getElementById('root')
)
