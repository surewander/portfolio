import { Alert, Snackbar } from "@mui/material"




const MyAlert = (props) => {

    const closeAlert = () => {
        props.closeHandler();
    }

    return (
        <>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={props.open} autoHideDuration={7000} onClose={() => {

                closeAlert()
            }} >
                <Alert onClick={
                    () => {
                        closeAlert();
                    }
                } severity={props.alertType}>
                    {props.message}
                </Alert>
            </Snackbar>

        </>
    )
}

export default MyAlert;