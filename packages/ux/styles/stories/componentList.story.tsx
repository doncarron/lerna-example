import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ComponentList } from '../src/components/ComponentList';
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

storiesOf('ComponentList', module)
    .add('with whole list', () => {
        let test = require('./samples/components.json')["Components"].splice(0, 20);

        return (
            <MuiThemeProvider theme={selectedTheme}>
                <ComponentList components={test} />
            </MuiThemeProvider>
        )
    });