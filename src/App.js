import { Button, CssBaseline, Divider, Grid, Input, Paper, TextField, Typography, useMediaQuery } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import './App.css';
import { styles } from './styles';
import { ModeSwitch } from './ModeSwitch';
import { Sidebar } from './Sidebar';
import { StoreContext } from './Store';
import { Theme } from './Theme';
import InputField from './InputField';

function App() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState({ inputValue: 'trololo', dictionary: {} });
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  const [primaryColor, setPrimaryColor] = useState('#e91e63');
  const classes = styles();
  const theme = Theme(darkMode, primaryColor);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // check prefered user mode 
  useEffect(() => {
    setDarkMode(prefersDarkMode)

    //not needed right now
    //   fetch("/cv/db.json")
    //     // fetch("http://localhost:3333/data")
    //     .then(response => response.json())
    //     .then(
    //       (result) => {
    //         setData(result);
    //         setIsLoaded(true);
    //       },
    //       (error) => {
    //         setError(error);
    //         setIsLoaded(true);
    //       }
    //     )
  }, [prefersDarkMode])

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  // } else {
  return (
    <React.Fragment>
      <StoreContext.Provider
        value={{ data, setData, language, darkMode, setDarkMode, setLanguage, setPrimaryColor }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="md">
            <Paper>
              <Grid
                container
                direction="column"
                // justify="flex-start"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <Typography variant="h3">
                    15.06
                  </Typography>
                </Grid>
                <Divider
                  style={{ width: "90%", height: "1px" }}
                >

                </Divider>
                <Grid item>

                </Grid>
                <Grid item>

                  <InputField>
                  </InputField>
                </Grid>
                <Grid item>

                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => console.log(data)}
                  >
                    Check
                </Button>
                </Grid>
                <Grid item>

                  <Button
                    variant="contained"
                    classes={{ root: classes.correct }}
                    size="large"
                    onClick={() => setData({ inputValue: '' })}
                  >
                    Reset
                  </Button>
                </Grid>
              </Grid>
            </Paper>


          </Container>
          <Sidebar>

            <ModeSwitch />
          </Sidebar>
        </ThemeProvider>
      </StoreContext.Provider>
    </React.Fragment >


  )
  // }
}



export default App;
