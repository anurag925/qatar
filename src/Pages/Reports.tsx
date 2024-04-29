import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton, CssBaseline } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function Reports() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  const goToMyInventory = () => {
    navigate('/myinventory');
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar position="static" style={{ backgroundColor: "#1a5435" }}>
        <Toolbar>
          <IconButton aria-label="go back" sx={{ marginRight: '10%', color: 'white' }} onClick={goBack}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h6" align="center">
            Reports
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper
        elevation={3}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          marginTop: '10%',
          padding: '10px',
          maxWidth: '300px',
          backgroundColor: '#fafafa',
          borderRadius: '20px'
        }}
      >
        <Button variant="contained" style={{ margin: '15px', color: 'black', backgroundColor: 'white', width: '80%', textTransform: 'none' }} onClick={goToMyInventory}>
          My Inventory
        </Button>
        <Button variant="contained" style={{ margin: '15px', color: 'black', backgroundColor: 'white', width: '80%', textTransform: 'none' }}>
          Customer sales Report
        </Button>
      </Paper>
    </Box>
  )
}

export default Reports;
