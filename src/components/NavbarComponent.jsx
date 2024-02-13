import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, Paper, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useRef, useState } from "react";
import myColors from "../assets/util/myColors.js";
import logo from "../images/logo.png"
import { Link } from "react-scroll";


const NavbarComponent = (props) => {
    const [openDrawer, setOpenDrawer] = useState(false)
    const myref = useRef(null)
    const [myHeight, setMyHeight] = useState(null)


    const toggleDrawer = () => {
        setOpenDrawer((prevState) => {
            return !prevState;
        })
    }

    useEffect(() => {
        console.log('myRef = ', myref)
        setMyHeight(myref.current.clientHeight + 'px')
    }, [])
    return (
        <>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar ref={myref} position="fixed" color={'dark'} >
                    <Toolbar>
                        <Box textAlign={'start'} pt={1} sx={{ flexGrow: 1 }}>
                            <img alt='logo' src={logo} style={{ height: '3em', width: '10em' }} />
                        </Box>
                        {/* <Box  /> */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>





                            {/* <Typography
                sx={{
                  my: 3, color: 'white',
                }

                }

              //className={navbarStyles.bigFontSize}


              >

                {globalData.userData.email.length > 0 ? globalData.userData.email : 'Guest'}
              </Typography>

             
              
              <CartCount /> */}




                            <Link smooth={true}
                                offset={50}
                                duration={500} to="about"
                                style={{
                                    marginRight: '1em'
                                }}
                            > <Button variant="contained" color="secondary"
                                sx={{ my: 2.5, display: 'block' }}
                            //className={navbarStyles.bigFontSize}
                            >
                                    About Me
                                </Button >
                            </Link>


                            <Link smooth={true}
                                offset={50}
                                duration={500} to="skills"
                                style={{
                                    marginRight: '1em'
                                }}
                            ><Button
                            variant="contained" color="secondary"
                                sx={{ my: 2.5, display: 'block' }}

                                
                            //className={navbarStyles.bigFontSize}
                            >
                                Skills
                            </Button>
                            </Link>


                            <Link smooth={true}
                                offset={50}
                                duration={500} to="work"
                                style={{
                                    marginRight: '1em'
                                }}
                            ><Button
                            variant="contained" color="secondary"
                                sx={{ my: 2.5, display: 'block' }}

                                
                            //className={navbarStyles.bigFontSize}
                            >
                                Work
                            </Button>
                            </Link>


                            <Link smooth={true}
                                offset={50}
                                duration={500} to="contact"
                                style={{
                                    marginRight: '1em'
                                }}
                            ><Button
                            variant="contained" color="secondary"
                                sx={{ my: 2.5, display: 'block' }}

                                
                            //className={navbarStyles.bigFontSize}
                            >
                                Contact Me
                            </Button>
                            </Link>



                        </Box>
                        <Box sx={{ display: { md: 'none', xs: 'flex' } }} >

                            <IconButton
                                size="large"
                                onClick={toggleDrawer}
                                color="secondary"
                                aria-label="open drawer"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                anchor={'right'}
                                open={openDrawer}
                                sx={{
                                    zIndex: 1,

                                }}
                                onClose={() => {
                                    toggleDrawer()
                                }}
                            //onClose={toggleDrawer}
                            >
                                <List onClick={toggleDrawer} sx={{
                                    backgroundColor: myColors.dark,
                                    color: 'white',
                                    height: '100%'
                                }}>
                                    <ListItem sx={{ height: '4em' }} disablePadding>

                                    </ListItem>



                                    <ListItem  sx={{
                                        color: 'white'
                                    }} pt={0} >
                                        <Link smooth={true}
                                            offset={50}
                                            duration={500} to="about"
                                            style={{
                                                width: '100%'
                                            }}
                                        >
                                            <Button fullWidth onClick={toggleDrawer} variant="contained" color="secondary">

                                                About Me
                                            </Button>
                                        </Link>
                                    </ListItem>

                                    <ListItem  sx={{
                                        color: 'white',
                                        
                                    }} pt={0} >
                                        <Link smooth={true}
                                            offset={50}
                                            duration={500} to="skills"
                                            style={{
                                                width: '100%'
                                            }}
                                        >
                                            <Button  fullWidth onClick={toggleDrawer} variant="contained" color="secondary">

                                                Skills
                                            </Button>
                                        </Link>
                                    </ListItem>

                                    <ListItem  sx={{
                                        color: 'white',
                                        
                                    }} pt={0} >
                                        <Link smooth={true}
                                            offset={50}
                                            duration={500} to="work"
                                            style={{
                                                width: '100%'
                                            }}
                                        >
                                            <Button  fullWidth onClick={toggleDrawer} variant="contained" color="secondary">

                                                Work
                                            </Button>
                                        </Link>
                                    </ListItem>

                                    <ListItem  sx={{
                                        color: 'white',
                                        
                                    }} pt={0} >
                                        <Link smooth={true}
                                            offset={50}
                                            duration={500} to="contact"
                                            style={{
                                                width: '100%'
                                            }}
                                        >
                                            <Button  fullWidth onClick={toggleDrawer} variant="contained" color="secondary">

                                                Contact Me
                                            </Button>
                                        </Link>
                                    </ListItem>


                                   



                                </List>
                            </Drawer>

                        </Box>
                    </Toolbar>
                </AppBar>
                {/* {renderMobileMenu}
      {renderMenu} */}
            </Box>
            <Box sx={{
                height: myHeight
            }}>

            </Box>
        </>
    )
}

export default NavbarComponent;

