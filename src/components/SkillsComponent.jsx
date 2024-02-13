import { Grid, Typography } from "@mui/material"

import js from "../images/JS.svg"
import reactjs from "../images/react.svg"
import node from "../images/node.svg"
import express from "../images/express.svg"
import mongoDb from "../images/mongoDB.svg"
import postgreSql from "../images/postgreSql.svg"
import sequelize from "../images/sequelize.svg"
import mongoose from "../images/mongoose.png"
import useMediaQuery from '@mui/material/useMediaQuery';
import Reveal from "./Reveal"

const SkillsComponent = () => {

    const skills = [
        {
            name: 'Javascript',
            img: js
        },
        {
            name: 'React Js',
            img: reactjs
        },
        {
            name: 'Node Js',
            img: node
        },
        {
            name: 'Express',
            img: express
        },
        {
            name: 'Mongo Db',
            img: mongoDb
        },
        {
            name: 'Mongoose',
            img: mongoose
        },
        {
            name: 'Postgres Sql',
            img: postgreSql
        },
        {
            name: 'Sequelize',
            img: sequelize
        }

    ]

    let mobileImgStyle = {
        height: '6em',
        width: '100%'
    }

    let imgStyle = {
        height: '10em',
        width: '100%'
    }

    const inLaptop = useMediaQuery('(min-width:900px)');

    return (
        <>
            <Grid container xs={11} justifyContent={'center'} >

                <Grid textAlign={'start'} mt={2} item  >
                    <Typography p={1} mb={2} sx={{
                        // fontSize: {
                        //     xs: '0.8rem',
                        //     md: '1rem'
                        // }
                    }} variant="h4">
                        Skills
                    </Typography>

                    <Grid justifySelf={'center'} spacing={{

                        xs: 3,
                        md: 4
                    }
                    } rowSpacing={{
                        xs: 6,
                        md: 8
                    }

                    } container sx={{
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}  >
                        {
                            skills.map((skill) => {
                                return (



                                    <Grid item xs={6} md={3}>
                                        <Reveal key={skill.name} hidden={{ opacity: 0, y: 100 }} visible={{ opacity: 1, y: 0 }}>
                                        <img src={skill.img} style={
                                            inLaptop ? imgStyle : mobileImgStyle
                                        }></img>
                                        <Typography mt={1} variant="body1" textAlign={'center'} fontWeight={'bold'} >{skill.name}</Typography>
                                    </Reveal>
                                    </Grid>

                    )
                            })
                        }


                    <Grid item name="work" >

                    </Grid>
                </Grid>
            </Grid>
        </Grid >

        </>
    )

}

export default SkillsComponent;