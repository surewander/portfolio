import { Box, Button, Grid, Typography } from "@mui/material"

import ecom from "../images/Ecom.jpg"
import blog from "../images/blog.jpg"
import engine from "../images/engine.jpg"
import recruitment from "../images/recruitment.jpg"
import favpal from "../images/favpal.jpg"
import salad from "../images/salad.jpg"
import sports from "../images/sports.jpg"
import colorGame from "../images/colorGame.jpg"



import myColors from "../assets/util/myColors.js"
import Reveal from "./Reveal"
import { useEffect, useRef, useState } from "react"

const projects = [{
    title: 'Online Shop',
    technology: 'MERN Stack',
    img: ecom,
    description: 'An online shop built on MERN stack. A user can sign in and sign out both authenticated using JWT, can add a product and also add product to cart and much more...!!!.',
    link: 'https://mern-shop-milan.netlify.app/',

},
{
    title: 'Online Shop',
    technology: 'Laravel + Vue.js',
    img: ecom,
    description: 'An online shop kind of a clone of Amazon where you can get any type of product electronics to clothes to grocery...from multiple vendors...!!. The app allows you to sign in as a venodr or a normal user, you get various dashboard to manage your products and orders...!!',
    link: 'https://github.com/milandeepsinghbhalla/flyinwear-new'
},
{
    title: 'Blogging Site',
    technology: 'Laravel + Vue.js',
    img: blog,
    description: 'A Blogging site user can sign in as a blogeer or normal user, a blogger can post blogs add meta tags and categories user can read blogs search blogs, filter blogs by categories and subscribe to a blogger....!!',
    link: 'https://github.com/milandeepsinghbhalla/voltmemos'
},
{
    title: 'Yarden Sports',
    technology: 'Vue.js',
    img: sports,
    description: 'A Sports ecommerce site build with Vue.js 2.0....!!!',
    link: 'https://milan-store.netlify.app/'
},
{
    title: 'Salad Wala',
    technology: 'Html, Css, Js',
    img: salad,
    description: 'A Static site for Salad Wala one of my freinds start-up user can browse various salads and order them the order info will reach to salad wala via Whatsapp....!!!',
    link: 'https://salad-wala.netlify.app/'
},
{
    title: 'Favpal-Frontend',
    technology: 'Html, Css, JS',
    img: favpal,
    description: 'Favpal is a site where user can create account as a normal user or a pal, if a user is a pal he must be an influencer or celeberity and then can have a calender to schedule meets with his followers.... followers will get to learn or to spend some time with there favourite Pals...!!!',
    link: 'https://favpal.netlify.app/'
},
{
    title: 'Decarbo Master',
    technology: 'Html, Css, JS',
    img: engine,
    description: 'A site for my freind Engine cleaning startup...!!!',
    link: 'https://decarbomaster.netlify.app/'
},
{
    title: 'Career Mentorz',
    technology: 'Html, Css, JS',
    img: recruitment,
    description: 'A static site for a Recuitment Agency....!!',
    link: 'https://careermentorz.netlify.app/'
},
{
    title: 'Color Guessing Game',
    technology: 'Html, Css, JS',
    img: colorGame,
    description: 'A Color Guessing game build to practice Javascript....!!!!',
    link: 'https://color-guess-game-milan.netlify.app/'
}
]


const WorkComponent = () => {
   

    return (
        <>
            <Grid mt={4} mb={4} container xs={11} justifyContent={'center'} >
              

                <Grid textAlign={'start'} item  >
                    <Typography p={1} mb={2} sx={{
                        // fontSize: {
                        //     xs: '0.8rem',
                        //     md: '1rem'
                        // }
                    }} variant="h4">
                        Work
                    </Typography>
                    <Grid

                        spacing={{

                            
                            md: 4
                        }
                        } rowSpacing={{
                            xs: 6,
                            md: 8
                        }

                        } pl={{
                            md: 4
                        }} justifyContent={'center'} alignItems={'strech'} container sx={{

                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}
                    >

                        {
                            projects.map((project) => {

                                return (
                                    <Grid key={project.link} item xs={12} md={4}>
                                        <Reveal style={{

                                            height: '100%',
                                           borderRadius: '16px',
                                            boxShadow: "5px 12px 11px rgba(0, 0, 0, 0.6)",

                                        }} hidden={{ opacity: 0, y: 100 }} visible={{ opacity: 1, y: 0 }}>
                                        <Box pb={7} sx={{
                                            // margin: '0.9em 0.9em'
                                            borderStyle: 'solid',
                                            borderWidth: '1px',
                                            borderColor: myColors.textBlack,
                                            borderRadius: '16px',
                                            boxShadow: "5px 12px 11px rgba(0, 0, 0, 0.6)",
                                            backgroundColor: "#E5E5E5",
                                            height: '100%',
                                            position: 'relative',
                                            paddingBottom: '3em'

                                        }}>


                                            <img src={project.img} style={
                                                {
                                                    height: '17em',
                                                    width: '100%',
                                                    // borderTop: '1px',
                                                    borderTopLeftRadius: '17px',
                                                    borderTopRightRadius: '17px'
                                                }
                                                //inLaptop ? imgStyle : mobileImgStyle
                                            }></img>

                                            <Typography p={3} variant="h5">
                                                {`${project.title} [${project.technology}]`}
                                            </Typography>

                                            <Typography p={3} sx={{
                                                fontSize: {
                                                    md: '1.1em'
                                                }
                                            }} textAlign={'justify'} variant="body1">
                                                {project.description}
                                            </Typography>
                                            <Grid sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                //top: top
                                            }} mt={0.5} pl={3} pb={3}>
                                                <a href={project.link}>

                                                    <Button

                                                        variant="contained" color="primary">
                                                        View
                                                    </Button>
                                                </a>
                                            </Grid>

                                        </Box>
                                         </Reveal>
                                    </Grid>



                                )
                            })
                        }


                    </Grid>


                    <Grid item name="contact">

                    </Grid>
                </Grid>
               
            </Grid>
        </>
    )
}

export default WorkComponent;