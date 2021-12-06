import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    background: {
      paper: '#fff',
      default: '#fafafa',
    },
    primary: {
      light: '#2081CE',
      main: '#2081CE',
      dark: '#3e53fd',
      contrastText: '#fff',
    },
    secondary: {
      light: 'rgba(113, 134, 168, 1)',
      main: 'rgba(70, 87, 115, 1)',
      dark: 'rgba(49, 60, 80, 1)',
      contrastText: '#fff',
    },
    error: {
      light: 'rgba(238, 150, 150, 1)',
      main: 'rgba(232, 106, 105, 1)',
      dark: 'rgba(204, 32, 31, 1)',
      contrastText: '#fff',
    },
    text: {
      primary: '#2081CE',
      secondary: 'rgba(70, 87, 115, 1)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
  },
});

export default theme;