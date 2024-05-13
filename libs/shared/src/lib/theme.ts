import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({ palette: {
    primary: {
      main: '#1976d2',
    },
  },
  typography: {
    h4: {
      fontWeight: 'bold',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          marginBottom: '2rem',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          marginTop: '2rem',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '1rem',
          textAlign: 'center',
          color: 'black',
        },
      },
    },
    MuiSwitch: {
        styleOverrides: {
            root: {
                textAlign: "center",
                margin: "0 auto"
            }
        }
    }
  },
  });
