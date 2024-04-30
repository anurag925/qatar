import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { CssBaseline, Grid } from "@mui/material";

function Admin(): JSX.Element {
  return (
    <Box>
      <CssBaseline />
      <AppBar position="static" style={{ backgroundColor: "#1a5435",}}>
        <Toolbar>
          <Grid container justifyContent="center">
            <Typography variant="h6">
              Admin
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      <Paper
        elevation={3}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '10% auto', // Changed initial margin
          padding: '10px',
          maxWidth: '300px',
          backgroundColor: '#fafafa',
          borderRadius:'20px'
        }}
      >
        <Button variant="contained" style={{ margin: '15px', color: 'black', backgroundColor: 'white', width:'80%',textTransform: 'none'}}>
          <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>New registration</Link>
        </Button>
        <Button variant="contained" style={{ margin: '15px', color: 'black', backgroundColor: 'white' , width:'80%',textTransform: 'none'}}>
          <Link to="/ManageContent" style={{ textDecoration: 'none', color: 'inherit' }}>Manage content</Link>
        </Button>
        <Button variant="contained" style={{ margin: '15px', color: 'black', backgroundColor: 'white', width:'80%',textTransform: 'none' }}>
          <Link to="/ManageUser" style={{ textDecoration: 'none', color: 'inherit' }}>Manage users</Link>
        </Button>
        <Button variant="contained" style={{ margin: '15px', color: 'black', backgroundColor: 'white', width:'80%',textTransform: 'none' }}>
          <Link to="/StockTransfer" style={{ textDecoration: 'none', color: 'inherit' }}>Stock transfer</Link>
        </Button>
        <Button variant="contained" style={{ margin: '15px', color: 'black', backgroundColor: 'white', width:'80%',textTransform: 'none'  }}>
          <Link to="/Reports" style={{ textDecoration: 'none', color: 'inherit' }}>My reports</Link>
        </Button>
      </Paper>
    </Box>
  )
}

export default Admin;
