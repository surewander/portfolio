import { Grid, Typography } from "@mui/material"
import Reveal from "./Reveal";



const AboutComponent = () => {

    return (
        <>
            <Grid name="skills"  textAlign={'start'} p={1} mt={3} item xs={11} >
            <Reveal  hidden={{ opacity: 0, y: 100 }} visible={{ opacity: 1, y: 0 }}>
                <Typography  sx={{
                    // fontSize: {
                    //     xs: '0.8rem',
                    //     md: '1rem'
                    // }
                }} variant="h4">
                    About Me
                </Typography>

                <Typography   mt={1} sx={{
                    fontSize: {
                        md: '1.1em'
                    }
                }} textAlign={'justify'} variant="body1">
                    I'm a full-stack developer with a passion for building beautiful and functional web applications. I have experience with the MERN stack, and I love working with React to create dynamic user interfaces. I'm also a big fan of MongoDB and Express.js, and I have a strong understanding of Node.js. I'm always learning new technologies and staying up to date with the latest trends in web development.
                </Typography>
                </Reveal>
            </Grid>
        </>
    )
}

export default AboutComponent;