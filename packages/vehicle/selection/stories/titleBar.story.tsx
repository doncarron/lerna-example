import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TitleBar } from '../src/components/TitleBar';
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

storiesOf('TitleBar', module)
    .add('input logging', () => {
        let handleChange = function(data: string) {}

        return (
            <MuiThemeProvider theme={selectedTheme}>
                <TitleBar handleChange={action(handleChange)} />
            </MuiThemeProvider>
        );
    });