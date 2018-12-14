import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Component } from '../src/components/Component';
import { createMuiTheme, Theme, MuiThemeProvider } from '@material-ui/core/styles';

const selectedTheme: Theme = createMuiTheme({
  palette: {
    primary: {
      light: '#2196f3',
      main: '#2196f3',
      dark: '#2196f3',
      contrastText: '#fff',
    }
  },
});

storiesOf('Component', module)
    .add('with simple component data', () => {
        let test = require('./samples/components.json')["Components"][0];

        return (
            <MuiThemeProvider theme={selectedTheme}>
                <Component component={test} />
            </MuiThemeProvider>
        )
    })
    .add('with more complex component data', () => {
        let test = require('./samples/components.json')["Components"][3];

        return (
            <MuiThemeProvider theme={selectedTheme}>
                <Component component={test} />
            </MuiThemeProvider>
        )
    });