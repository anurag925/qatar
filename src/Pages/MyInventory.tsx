import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { TextField, Grid, Button, Divider, CssBaseline, IconButton } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

const MyInventory: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedMonth(event.target.value);
    // You can perform filtering here based on the selected value
  };

  const handleButtonClick = (index: number) => {
    if (selectedButton === index) {
      setSelectedButton(null);
    } else {
      setSelectedButton(index);
    }
  };

  const goBack = () => {
    navigate('/Reports');
  };

  return (
    <Box style={{ textAlign: 'center' }}>
      <CssBaseline />
      <AppBar position="static" style={{ backgroundColor: "#1a5435" }}>
        <Toolbar>
          <IconButton aria-label="go back" sx={{ marginRight: '10%', color: 'white' }} onClick={goBack}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h6" style={{ flex: 1, textAlign: 'left' }}>
            My Inventory
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        style={{
          backgroundColor: "rgb(59 245 59)",
          padding: '10px',
          textAlign: 'center',
          margin: '20px auto',
          display: 'inline-block',
          borderRadius: '10px',
          minWidth: '300px'
        }}
      >
        <Typography variant="body1" >
          Total item balance: 100
        </Typography>
      </Box>
      <div>
        <Paper
          style={{
            backgroundColor: "#f0f2f5",
            padding: '20px',
            textAlign: 'center',
            margin: '20px auto',
            display: 'inline-block',
            borderRadius: '10px',
            minWidth: '300px'
          }}
        >
          <Card>
            <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="body1" style={{ marginRight: '20px' }}>
                Current Month:
              </Typography>
              <Select
                value={selectedMonth}
                onChange={handleChange}
                style={{ marginTop: '10px', backgroundColor: "white" }}
              >
                <MenuItem value={'1 month'}>1 month</MenuItem>
                <MenuItem value={'3 months'}>3 months</MenuItem>
                <MenuItem value={'6 months'}>6 months</MenuItem>
                <MenuItem value={'Current year'}>Current year</MenuItem>
                <MenuItem value={'By Date'}>By Date</MenuItem>
              </Select>
            </CardContent>
          </Card>

          <Card style={{ marginTop: '20px' }}>
            <CardContent>
              <Typography variant="body1">
                Filter by {selectedMonth}
              </Typography>
            </CardContent>

            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={5}>
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="from"
                  label="from"
                  name="from"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="to"
                  label="to"
                  name="to"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Card>

          <Card style={{ marginTop: '20px' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                <Typography variant="h6" style={{ marginRight: '20px' }}>Item: Coconut Oil</Typography>
              </div>
              <div>
                {[100, 200, 500, 750, 1000].map((value, index) => (
                  <Button
                    key={index}
                    variant="contained"
                    style={{
                      backgroundColor: selectedButton === index ? "#1a5435" : "white",
                      color: selectedButton === index ? "white" : "#1a5435",
                      marginRight: '10px',
                      marginBottom: '10px',
                      width: '60px',
                      fontSize: '10px',
                      padding: '5px'
                    }}
                    onClick={() => handleButtonClick(index)}
                  >
                    {value} ml
                  </Button>
                ))}
              </div>
              <Divider />
              <Typography style={{ textAlign: 'left' }}>Sales Qty: 100</Typography>
              <Typography style={{ textAlign: 'left' }}>Amount: $2500</Typography>
              <Typography style={{ textAlign: 'left' }}>Balance:</Typography>
            </CardContent>
          </Card>
        </Paper>
      </div>
    </Box>
  );
}

export default MyInventory;
