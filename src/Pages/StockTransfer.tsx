import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Paper, TextField, MenuItem } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton, CssBaseline } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function StockTransfer() {
  const [selectedItem, setSelectedItem] = React.useState<string>('');
  const [amount, setAmount] = React.useState<string>('');
  const navigate = useNavigate();

  const handleChangeItem = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedItem(event.target.value as string);
  };

  const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
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
            Stock Transfer
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
        <div>
          <TextField
            select
            label="Item name"
            value={selectedItem}
            onChange={handleChangeItem}
            variant="outlined"
            style={{ width: '100%', marginBottom: '10px' }}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="Item 1">Item 1</MenuItem>
            <MenuItem value="Item 2">Item 2</MenuItem>
            <MenuItem value="Item 3">Item 3</MenuItem>
          </TextField>
          <TextField
            label="₹ 1200 (1L)"
            value={amount}
            onChange={handleChangeAmount}
            variant="outlined"
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <TextField
            label="Quantity"
            value={amount}
            onChange={handleChangeAmount}
            variant="outlined"
            style={{ width: '47%', marginBottom: '10px', marginRight: '15px' }}
          />
          <TextField
            label="Amount"
            value={amount}
            onChange={handleChangeAmount}
            variant="outlined"
            style={{ width: '47%', marginBottom: '10px' }}
          />
          <TextField
            select
            label="Select ADO"
            value={selectedItem}
            onChange={handleChangeItem}
            variant="outlined"
            style={{ width: '100%', marginBottom: '10px' }}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="Item 1">Item 1</MenuItem>
            <MenuItem value="Item 2">Item 2</MenuItem>
            <MenuItem value="Item 3">Item 3</MenuItem>
          </TextField>
          <TextField
            label="Set monthly target"
            value={amount}
            onChange={handleChangeAmount}
            variant="outlined"
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <TextField
            label="Total Qty"
            value={amount}
            onChange={handleChangeAmount}
            variant="outlined"
            style={{ width: '47%', marginBottom: '10px', marginRight: '15px' }}
          />
          <TextField
            label="Total Amt"
            value={amount}
            onChange={handleChangeAmount}
            variant="outlined"
            style={{ width: '47%', marginBottom: '10px' }}
          />
          <Button
            sx={{
              backgroundColor: '#1a5435',
              borderRadius: '50px',
              color: 'white',
              textTransform: 'none',
              display: 'block',
              margin: 'auto',
              marginTop: '10px',
              padding: '10px 70px', fontSize: '15px'
            }}
          >
            Transfer
          </Button>
        </div>
      </Paper>
    </Box>
  )
}

export default StockTransfer;
