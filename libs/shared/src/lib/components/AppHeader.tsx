import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const AppHeader = ({ title }: { title: string }) => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div">
                {title}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>     
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>Home</Button>
                </Link>
                <Link to="/calculator" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>Calculator</Button>
                </Link>
            </Box>
        </Toolbar>
    </AppBar>
);