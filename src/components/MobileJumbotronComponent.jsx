import { Button, Grid, Typography } from "@mui/material"
import jumbotronStyles from "./MobileJumbotronComponent.module.css"
import jumbotronSvg from "../images/jumbotron.svg"
import resume from "/milan-resume-latest.pdf"
import Reveal from "./Reveal"


const MobileJumbotronComponent = () => {

    return (


        <Grid m={0} pb={6} container justifyContent={'center'} alignItems={'end'} xs={12}
            //jumbotron
            sx={{
                display: {
                    xs: 'flex',
                    md: "none"
                },
                backgroundImage: `url(${jumbotronSvg})`,

            }}
            className={jumbotronStyles.jumbotron}
        >
            <Grid item xs={11}>
                <Reveal hidden={{ opacity: 0, y: 100 }} visible={{ opacity: 1, y: 0 }}>
                    <Typography sx={{ fontSize: '0.5rem' }} p={2} className={jumbotronStyles.transparentBackground} textAlign={'left'}>
                        <Typography color={'white'} sx={{ fontSize: '7em' }} variant="h2" >
                            Hi, I'm Milan.
                        </Typography>
                        <Typography pl={0.5} color={'#F5F5F5'} variant="h6">
                            I'm a Full Stack Developer, and I help companies build and scale their applications.
                        </Typography>
                    </Typography>
                </Reveal>



                <Grid mt={3} pl={1} justifyContent={'space-around'} container textAlign={'start'} >

                    <Grid item xs={5}>
                        <Reveal hidden={{ opacity: 0, x: 100 }} visible={{ opacity: 1, x: 0 }} >
                            <a style={{
                                width: '100%'
                            }} href={resume} download="downloaded-milan-resume.pdf"><Button fullWidth size="large" className={jumbotronStyles.button} variant="contained" color="primary">Resume</Button></a>
                        </Reveal>
                    </Grid>

                    <Grid item xs={5}>
                        <Reveal hidden={{ opacity: 0, x: -200 }} visible={{ opacity: 1, x: 0 }} >
                            <a style={{
                                width: '100%'
                            }} href={'https://www.linkedin.com/in/milandeep-singh-bhalla-b6aa6721a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bh%2BQXMR%2FSSjCRlt8jxFQaNA%3D%3D'}  ><Button fullWidth size="large" variant="contained" color="secondary"> View LinkdIn</Button>
                            </a>
                        </Reveal>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}

export default MobileJumbotronComponent;