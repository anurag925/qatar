import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

interface User {
  name: string;
  registerNo: string;
  dob: string;
  createdDate: string;
  status: string;
}

const users: User[] = [
  {
    name: 'ABC',
    registerNo: '02_1236',
    dob: '12-07-2000',
    createdDate: '12-07-2024',
    status: 'Active'
  },
  {
    name: 'XYZ',
    registerNo: '02_1236',
    dob: '12-07-1985',
    createdDate: '12-07-2024',
    status: 'Inactive'
  }
];

const SelectAdo: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  
  const handleSearch = () => {
    const filtered = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredUsers(filtered);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box>
      <AppBar position="static" style={{ backgroundColor: "#1a5435" }}>
        <Toolbar style={{ justifyContent: 'center' }}>
          <Typography variant="h6" align="center">
            Manage User
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search name"
          style={{ width: '300px' }}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
     
      <Grid container justifyContent="center" style={{ marginTop: '10px' }}>
        <Paper
          elevation={3}
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            width: '300px', // Same width as search bar
            backgroundColor: '#fafafa',
            borderRadius: '20px',
            height: '300px', // Adjust height here
            overflowY: 'auto' // Add this to enable scrolling if needed
          }}
        >
          <div className="users-information">
            {filteredUsers.length === 0 ? (
              <Typography variant="body1">User not found</Typography>
            ) : (
              filteredUsers.map((user, index) => (
                <React.Fragment key={index}>
                  <Typography variant="body1">{user.name}</Typography>
                  <hr style={{ width: '100%', margin: '5px 0' }} />
                </React.Fragment>
              ))
            )}
          </div>
        </Paper>
      </Grid>
    </Box>
  );
}

export default SelectAdo;
