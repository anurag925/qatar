import React from 'react';
import { TextField, Button, IconButton, Container, CssBaseline, Typography, Paper } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const NewRegistration: React.FC = () => {
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Form submission logic here
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar position="static" style={{ backgroundColor: "#1a5435" }}>
        <Toolbar>
          <IconButton aria-label="go back" sx={{marginRight:'10%',color:'white'}} onClick={goBack}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h6" align="center">
           New Registration
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xs" style={{ marginTop: '10%' }}>
        <Paper elevation={3} style={{ padding: '20px', borderRadius:'20px' }}>
          <Typography component="h1" variant="h5" align="center">
            Register
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Enter name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="mobile"
              label="Enter mobile number"
              name="mobile"
              autoComplete="tel"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="dob"
              label="DOB"
              name="dob"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ marginTop: '24px', backgroundColor: '#1a5435', color: 'white' }}
            >
              Register
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default NewRegistration;
