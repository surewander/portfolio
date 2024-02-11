import { Grid, ThemeProvider, createTheme } from "@mui/material";
import JumbotronComponent from "./JumbotronComponent";
import myColors from "../util/myColors";


const PortfolioPage = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: myColors.primaryGreen,
            },
            secondary: {
                main: myColors.secondaryGrey
            }
        },
        components: {
            // Name of the component
            MuiButton: {
              styleOverrides: {
                // Name of the slot
                root: {
                  // Some CSS
                  borderRadius: '10px',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 600,
                  textTransform: 'none'
                },
              },
            },
            MuiTypography: {
                styleOverrides: {
                    root: {
                        fontFamily: 'Space Grotesk'
                    }
                }
            }
          },
    });


    return (
        <ThemeProvider theme={theme}>
            <Grid container justifyContent={'center'}>

                <JumbotronComponent />
            </Grid>

        </ThemeProvider>

    )


}

export default PortfolioPage;