'use client';

// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary:{
            main: "#0071E7"
        }
    },
  typography: {
    fontFamily: 'Poppins, sans-serif', // Set Poppins as the default font
  },
});

export default theme;
