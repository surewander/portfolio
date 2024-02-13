import { Button, Grid, Typography } from "@mui/material"

import ecom from "../images/Ecom.jpg"
import myColors from "../assets/util/myColors.js"
import Reveal from "./Reveal"


const WorkComponent = () => {

    return (
        <>
            <Grid mt={4} mb={4} container xs={11} justifyContent={'center'} >
                <Reveal hidden={{ opacity: 0, y: 100 }} visible={{ opacity: 1, y: 0 }}>

                    <Grid textAlign={'start'} item  >
                        <Typography p={1} mb={2} sx={{
                            // fontSize: {
                            //     xs: '0.8rem',
                            //     md: '1rem'
                            // }
                        }} variant="h4">
                            Work
                        </Typography>

                        <Grid justifySelf={'center'}

                            // spacing={{

                            //     xs: 3,
                            //     md: 4
                            // }
                            // } rowSpacing={{
                            //     xs: 6,
                            //     md: 8
                            // }

                            //}
                            container sx={{
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }}  >
                            <Grid sx={{
                                borderStyle: 'solid',
                                borderWidth: '1px',
                                borderColor: myColors.textBlack,
                                borderRadius: '16px',
                                boxShadow: "0 8px 11px rgba(0, 0, 0, 0.6)",
                                backgroundColor: "#E5E5E5",
                                marginLeft: 'auto',
                                marginRight: 'auto'


                            }} item xs={11} md={4} >


                                <img src={ecom} style={
                                    {
                                        height: '17em',
                                        width: '100%',
                                        // borderTop: '1px',
                                        borderTopLeftRadius: '17px',
                                        borderTopRightRadius: '17px'
                                    }
                                    //inLaptop ? imgStyle : mobileImgStyle
                                }></img>

                                <Typography p={3} sx={{
                                    fontSize: {
                                        md: '1.1em'
                                    }
                                }} textAlign={'justify'} variant="body1">
                                    An online shop built on MERN stack. A user can sign in and sign out both authenticated using JWT, can add a product and also add product to cart and much more...!!!.
                                </Typography>
                                <Grid mt={0.5} pl={3} pb={3}>
                                    <a href={'https://mern-shop-milan.netlify.app/'}>

                                    <Button variant="contained" color="primary">
                                        Learn More...!!
                                    </Button>
                                    </a>
                                </Grid>

                            </Grid>

                            <Grid item name="contact">

                            </Grid>

                        </Grid>
                    </Grid>
                </Reveal>
            </Grid>
        </>
    )
}

export default WorkComponent;