import { Padding } from '@mui/icons-material';
import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export const Root = (): JSX.Element => {
  return (
    <div>
      <Box display="flex" flexDirection='column' alignItems="center" justifyContent="center" minHeight="100vh">
      <img src="/vite.svg"></img>
      <Padding ></Padding>
      Get Started
      <Button variant="contained" style={{ margin: '15px', color: 'black', backgroundColor: 'white', width: '80%', textTransform: 'none' }}>
        <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login with mobile number</Link>
      </Button>
      Or
      <Button variant="contained" style={{ margin: '15px', color: 'black', backgroundColor: 'white', width: '80%', textTransform: 'none' }}>
        <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register with mobile number</Link>
      </Button>
    </Box>
    </div>
  )
}
