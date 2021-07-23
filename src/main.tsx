import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {createTheme, MuiThemeProvider} from "@material-ui/core";
import { Provider } from 'react-redux'
import {store} from "./redux/store";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Nunito',
            'sans-serif'
        ].join(','),
    },
});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App/>
        </MuiThemeProvider>
    </Provider>
    ,
    document.getElementById('root')
)
