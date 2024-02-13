import { Grid, ThemeProvider, createTheme } from "@mui/material";
import JumbotronComponent from "./JumbotronComponent";
import myColors from "../util/myColors";
import NavbarComponent from "./NavbarComponent";
import MobileJumbotronComponent from "./MobileJumbotronComponent";
import AboutComponent from "./AboutComponent";
import SkillsComponent from "./SkillsComponent"
import WorkComponent from "./WorkComponent";
import FooterComponent from "./FooterComponent";
import Reveal from "./Reveal";


const PortfolioPage = () => {

    
      

    const theme = createTheme({
        palette: {
            primary: {
                main: myColors.primaryGreen,
            },
            secondary: {
                main: myColors.secondaryGrey
            },
            dark: {
                main: myColors.dark
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
        <ThemeProvider  theme={theme}>

            <NavbarComponent />
            <MobileJumbotronComponent />

            <Grid container xs={11} md={10} sx={{
                marginLeft: 'auto',
                marginRight: 'auto',
                
                color: myColors.textBlack
            }} justifyContent={'center'}>
               

                <JumbotronComponent  />
              <AboutComponent />
                <SkillsComponent />
                <WorkComponent />
            </Grid>

            <FooterComponent />

        </ThemeProvider>

    )


}

export default PortfolioPage;