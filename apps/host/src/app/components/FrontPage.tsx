import { Container, Grid, Paper, Typography } from "@mui/material";

const FrontPage = () => {
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper>
                    <Typography variant="h4" gutterBottom>
                        Welcome to react calculator
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Calculate Triangle surface and Circle diameter on the calculator page
                    </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};
  
  export default FrontPage;