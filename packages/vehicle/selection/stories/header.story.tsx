import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from '../src/components/Header';
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

storiesOf('Header', module)
    .add('default', () => {
        return (
            <MuiThemeProvider theme={selectedTheme}>
                <Header />
            </MuiThemeProvider>
        )
    });