import React from 'react';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Define your theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFA500', // Orange color
      dark: '#FF8C00', // Darker shade for hover/focus
    },
    action: {
      disabledBackground: '#CCCCCC',
      disabled: '#888888',
    },
  },
});

const YourComponent = () => {
  const index = 1; // Replace with an actual value or variable

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '30vh', // Adjust as needed
        }}
      >
        <Button
          endIcon={<ArrowForwardIcon style={{ color: 'inherit' }} />}
          size="large"
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            color: 'white',
            '&:hover': {
              backgroundColor: (theme) => theme.palette.primary.dark,
            },
            '&.Mui-focusVisible': {
              backgroundColor: (theme) => theme.palette.primary.dark,
            },
            '&.Mui-disabled': {
              backgroundColor: (theme) => theme.palette.action.disabledBackground,
              color: (theme) => theme.palette.action.disabled,
            },
          }}
        >
          Button {index}
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default YourComponent;
