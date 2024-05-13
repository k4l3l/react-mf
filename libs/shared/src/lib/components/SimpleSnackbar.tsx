import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";

export const SimpleSnackbar = (props: any) => {
    const action = (
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={props.handleClose}
        >
            X
        </IconButton>
    );

    return (
        <Snackbar
            action={action}
            {...props}
        />
    );
}