import { Button, Grid, Typography } from "@mui/material"
import jumbotronStyles from "./JumbotronComponent.module.css"
import jumbotronSvg from "../images/jumbotron.svg"

import resume from "/milan-resume-latest.pdf"
import Reveal from "./Reveal"


const JumbotronComponent = () => {
    return (

        <Grid name="about" mt={7} pl={7} pb={7} container alignItems={'end'} xs={11}
            //jumbotron
            sx={{
                display: {
                    xs: 'none',
                    md: "flex"
                },
                backgroundImage: `url(${jumbotronSvg})`
            }}
            className={jumbotronStyles.jumbotron}
        >


            <Grid item xs={11}>
                <Reveal hidden={{ opacity: 0, y: 100 }} visible={{ opacity: 1, y: 0 }}>
                    <Typography className={jumbotronStyles.transparentBackground} textAlign={'left'}>
                        <Typography color={'white'} variant="h2" >
                            Hi, I'm Milan.
                        </Typography>
                        <Typography pl={0.5} color={'#F5F5F5'} variant="h6">
                            I'm a Full Stack Developer, and I help companies build and scale their web as well as mobile applications.
                        </Typography>
                    </Typography>
                </Reveal>



                <Grid mt={3} pl={1} justifyContent={'space-around'} container xs={7} textAlign={'start'}>



                    <Grid item md={4}>
                        <Reveal hidden={{ opacity: 0, x: 100 }} visible={{ opacity: 1, x: 0 }} >

                            <a href={resume} style={{
                                width: '100%'
                            }} download="downloaded-milan-resume.pdf"><Button fullWidth size="large" className={jumbotronStyles.button} variant="contained" color="primary">Resume</Button></a>
                        </Reveal>
                    </Grid>


                    <Grid item md={4}>

                    <Reveal hidden={{ opacity: 0, x: -200 }} visible={{ opacity: 1, x: 0 }} >

                        <a href={'https://www.linkedin.com/in/milandeep-singh-bhalla-b6aa6721a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BnICtI7UDRIqbyd21wyVx7A%3D%3D'} style={{
                            width: '100%'
                        }}>   <Button fullWidth size="large" variant="contained" color="secondary"> View LinkdIn</Button> </a>
                    </Reveal>    
                    </Grid>

                </Grid>
            </Grid>

        </Grid>
    )

}

export default JumbotronComponent;