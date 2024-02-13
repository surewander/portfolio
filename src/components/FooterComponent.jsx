import { Box, Button, Divider, Grid, TextField, Typography } from "@mui/material";
import myColors from "../assets/util/myColors.js";
import useMediaQuery from '@mui/material/useMediaQuery';


import formVerification from "../assets/util/formVerification.js";

import { useEffect, useReducer, useState } from "react";
import { Height } from "@mui/icons-material";
import MyAlert from "./MyAlert";
import Reveal from "./Reveal";


const FooterComponent = () => {

    const inLaptop = useMediaQuery('(min-width:900px)');

    const [canSubmit, setCanSubmit] = useState(false);

    const [malert, setMalert] = useState({
        isOpen: false,
        alertType: '',
        message: ''
    })

    const closeHandler = () => {
        setMalert((prev) => {
            return {
                isOpen: false,
                alertType: '',
                message: ''
            }
        })
    }



    const sentHandler = () => {
        let myData = {
            name: contactForm.name.value.trim(),
            email: (contactForm.email.value.trim()).toLowerCase(),
            message: contactForm.message.value.trim()
        }



        const values = [[myData.name, myData.email, myData.message, new Date().toLocaleDateString()]];

        fetch("https://v1.nocodeapi.com/milan1999/google_sheets/ryebRydCSOgkhSBc?tabId=Sheet1", {
            method: 'POST',
            headers: {

                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((res) => {
                console.log('res :-', res);
                if (res.status < 200 && res.status > 299) {

                    setMalert({
                        isOpen: true,
                        alertType: 'error',
                        message: 'message not sent..!!!'
                    })
                }
                return res.json()
            })
            .then((data) => {
                console.log('data: -', data)
                contactFormDispatch({
                    type: 'resetForm'
                })
                setMalert({
                    isOpen: true,
                    alertType: 'success',
                    message: 'message sent..!!!'
                })
            })
            .cath(err => {
                console.log('error ', err)
            })
    }

    const MobileDivider = <>
        <Grid item pt={6} xs={12}>

            <Divider sx={{
                borderColor: myColors.secondaryGrey,
            }} variant="fullWidth" />
        </Grid>
    </>

    const LaptopDivider = <>


        <Divider flexItem variant="fullWidth" sx={{
            borderColor: myColors.secondaryGrey,
        }} orientation="vertical" />

    </>

    function removeLineBreaks(value) {
        const textValue = value.replace(/\r?\n|\r/g, ""); // Matches CR+LF, LF, or CR
        return textValue;
    }


    const contactFormReducer = (state, action) => {



        switch (action.type) {
            case "updateName":
                //,,,
                state = {
                    ...state,
                    name: {
                        ...state.name,
                        value: action.value
                    }
                }
                return state;

            case "validateName":
                //...
                let nameResult = formVerification(state.name.value, ['isNotEmpty'])
                state = {
                    ...state,
                    name: {
                        ...state.name,
                        ok: nameResult.ok,
                        helperText: nameResult.message
                    }
                }
                return state;

            case "updateEmail":
                //....
                state = {
                    ...state,
                    email: {
                        ...state.email,
                        value: action.value
                    }
                }
                return state;
            case "validateEmail":
                //...
                let emailResult = formVerification(state.email.value, ['isNotEmpty', 'isEmail'])
                state = {
                    ...state,
                    email: {
                        ...state.email,
                        ok: emailResult.ok,
                        helperText: emailResult.message
                    }
                }
                return state;
            case "updateMessage":
                console.log('mesValue ', action.value)
                action.value = removeLineBreaks(action.value)
                //...
                state = {
                    ...state,
                    message: {
                        ...state.message,
                        value: action.value
                    }
                }
                return state;
            case "validateMessage":
                //,,,,,
                let messageResult = formVerification(state.message.value, ['isNotEmpty'])
                state = {
                    ...state,
                    message: {
                        ...state.message,
                        ok: messageResult.ok,
                        helperText: messageResult.message
                    }
                }
                return state;
            case "resetForm":
                return {
                    name: {
                        value: '',
                        ok: true,
                        helperText: ''
                    },
                    email: {
                        value: '',
                        ok: true,
                        helperText: '',
                    },
                    message: {
                        value: '',
                        ok: true,
                        helperText: ''
                    }
                }
        }
    }

    const [contactForm, contactFormDispatch] = useReducer(contactFormReducer, {
        name: {
            value: '',
            ok: true,
            helperText: ''
        },
        email: {
            value: '',
            ok: true,
            helperText: '',
        },
        message: {
            value: '',
            ok: true,
            helperText: ''
        }
    })

    useEffect(() => {
        if (contactForm.name.value != '' && contactForm.email.value != '' && contactForm.message.value != '' && contactForm.name.ok && contactForm.email.ok && contactForm.message.ok) {
            setCanSubmit(true)
        }
        else {

            setCanSubmit(false)
        }
    }, [contactForm])

    return (
        <>

            <MyAlert open={malert.isOpen} closeHandler={closeHandler} alertType={malert.alertType} message={malert.message} />
            <Grid p={{
                xs: 4,
                md: 5
            }}

                m={0} justifyContent={{
                    md: 'space-around'
                }} sx={{
                    backgroundColor: myColors.dark,
                    // zIndex: 10,
                    // width: '100vw'



                }} container xs={12} >
                <Grid xs={12} md={5}>
                    <Reveal hidden={{ opacity: 0, y: 100 }} visible={{ opacity: 1, y: 0 }} >


                        <Grid item p={5}
                            sx={{
                                borderStyle: 'solid',
                                borderWidth: '1px',
                                borderColor: myColors.textBlack,
                                borderRadius: '16px',
                                boxShadow: "0 8px 11px rgba(0, 0, 0, 0.6)",
                                backgroundColor: myColors.secondaryGrey,
                                color: myColors.textBlack
                            }}
                            textAlign={'start'}>

                            <Grid mb={1}>
                                <Typography variant="h5"
                                >
                                    Contact Me
                                </Typography>
                            </Grid>
                            <Grid mb={2}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>

                                    <TextField
                                        //size='medium'
                                        sx={{
                                            ".MuiInputBase-input": {
                                                fontSize: "1.17rem", // Increase font size to 1.5rem
                                            },

                                        }}
                                        InputLabelProps={{
                                            sx: {
                                                fontSize: "1.1rem", // Adjust minHeight to match input font size
                                            },
                                        }}
                                        onChange={(e) => {
                                            let action = {
                                                type: 'updateName',
                                                value: e.target.value
                                            }
                                            contactFormDispatch(action);
                                            action = {
                                                type: 'validateName',
                                                value: null
                                            }
                                            contactFormDispatch(action);

                                        }}
                                        onBlur={(e) => {
                                            let action = {
                                                type: 'validateName',
                                                value: null
                                            }
                                            contactFormDispatch(action);

                                        }}
                                        value={contactForm.name.value}
                                        color='primary'
                                        error={!contactForm.name.ok}
                                        helperText={contactForm.name.helperText}
                                        fullWidth id="input-with-sx-name" label="Name" variant="standard" />

                                </Box>

                            </Grid>

                            <Grid mb={2}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>

                                    <TextField
                                        //size='medium'
                                        sx={{
                                            ".MuiInputBase-input": {
                                                fontSize: "1.17rem", // Increase font size to 1.5rem
                                            },

                                        }}
                                        InputLabelProps={{
                                            sx: {
                                                fontSize: "1.1rem", // Adjust minHeight to match input font size
                                            },
                                        }}
                                        onChange={(e) => {
                                            let action = {
                                                type: 'updateEmail',
                                                value: e.target.value
                                            }
                                            contactFormDispatch(action);
                                            action = {
                                                type: 'validateEmail',
                                                value: null
                                            }
                                            contactFormDispatch(action);

                                        }}
                                        onBlur={(e) => {
                                            let action = {
                                                type: 'validateEmail',
                                                value: null
                                            }
                                            contactFormDispatch(action);

                                        }}
                                        value={contactForm.email.value}

                                        color='primary'
                                        error={!contactForm.email.ok}
                                        helperText={contactForm.email.helperText}
                                        fullWidth id="input-with-sx-Email" label="Email" variant="standard" />

                                </Box>

                            </Grid>

                            <Grid mb={2}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>

                                    <TextField
                                        //size='medium'
                                        sx={{
                                            ".MuiInputBase-input": {
                                                fontSize: "1.17rem", // Increase font size to 1.5rem
                                            },

                                        }}
                                        InputLabelProps={{
                                            sx: {
                                                fontSize: "1.1rem", // Adjust minHeight to match input font size
                                            },
                                        }}
                                        onChange={(e) => {
                                            let action = {
                                                type: 'updateMessage',
                                                value: e.target.value
                                            }
                                            contactFormDispatch(action);
                                            action = {
                                                type: 'validateMessage',
                                                value: null
                                            }
                                            contactFormDispatch(action);

                                        }}
                                        onBlur={(e) => {
                                            let action = {
                                                type: 'validateMessage',
                                                value: null
                                            }
                                            contactFormDispatch(action);

                                        }}
                                        value={contactForm.message.value}
                                        multiline={true}
                                        type="text"
                                        rows={3}
                                        color='primary'
                                        error={!contactForm.message.ok}
                                        helperText={contactForm.message.helperText}
                                        fullWidth id="input-with-sx-Message" label="Message" variant="standard" />

                                </Box>

                            </Grid>

                            <Grid mt={5}  >
                                <Button disabled={!canSubmit} onClick={sentHandler} size="large" variant="contained" color="primary">
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                    </Reveal>





                </Grid>


                {inLaptop && LaptopDivider}
                {!inLaptop && MobileDivider}

                <Grid item sx={{

                    color: myColors.secondaryGrey
                }
                } p={{
                    md: 5,
                    xs: 2
                }} xs={12} md={5}>

                    <Grid mt={{

                        xs: 3,
                        md: 0
                    }

                    } sx={{
                        marginLeft: {
                            md: 'auto'
                        },
                        width: {
                            md: '60%'
                        }
                    }} xs={5} textAlign={'start'} >
                        <Reveal hidden={{ opacity: 0, y: 100 }} visible={{ opacity: 1, y: 0 }} >
                            <Typography mb={1} variant="h3"
                            >
                                Links
                            </Typography>
                            <Typography mb={1} variant="h6"
                            >
                                About Me
                            </Typography>
                            <Typography mb={1} variant="h6"
                            >
                                Skills
                            </Typography>
                            <Typography mb={1} variant="h6"
                            >
                                Work
                            </Typography>
                            <Typography mb={1} variant="h6"
                            >
                                Contact Me
                            </Typography>

                        </Reveal>

                    </Grid>

                </Grid>

                {/* <Grid item textAlign={'center'} color={myColors.secondaryGrey} xs={12}> */}
                {/* <Typography mt={4} variant="h5"
                        >
                            <CopyrightIcon /> Milan 2024
                        </Typography>

                </Grid> */}

            </Grid >

        </>
    )
}

export default FooterComponent;