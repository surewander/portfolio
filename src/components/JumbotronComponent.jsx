import { Button, Grid, Typography } from "@mui/material"
import jumbotronStyles from "./JumbotronComponent.module.css"
import jumbotronSvg from "../images/jumbotron.svg"


const JumbotronComponent = () => {
    return (

        <Grid pl={7} pb={7} container alignItems={'end'} xs={11}
            //jumbotron
            sx={{
                backgroundImage: `url(${jumbotronSvg})`
            }}
            className={jumbotronStyles.jumbotron}
        >
            <Grid item xs={11}>
                <Typography className={jumbotronStyles.transparentBackground} textAlign={'left'}>
                    <Typography color={'white'} variant="h2" >
                        Hi, I'm Milan.
                    </Typography>
                    <Typography pl={0.5} color={'#F5F5F5'} variant="h6">
                        I'm a Full Stack Developer, and I help companies build and scale their web as well as mobile applications.
                    </Typography>
                </Typography>



                <Grid mt={3} pl={1} container xs={5} textAlign={'start'}>

                    <Grid  xs={5}>

                        <Button size="large"  className={jumbotronStyles.button} variant="contained" color="primary"> View Resume</Button>
                    </Grid>

                    <Grid  xs={5}>

                        <Button size="large" variant="contained" color="secondary"> View LinkdIn</Button>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )

}

export default JumbotronComponent;