import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton, CssBaseline } from "@mui/material";
import { useNavigate } from 'react-router-dom';

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

const ManageUser: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const [editIndex, setEditIndex] = useState<number>(-1);
  const [editData, setEditData] = useState<User>({ name: '', registerNo: '', dob: '', createdDate: '', status: '' });
  const navigate = useNavigate();

  const handleSearch = () => {
    const filtered = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredUsers(filtered);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setEditData(filteredUsers[index]);
  };

  const handleSave = () => {
    const updatedUsers = [...filteredUsers];
    updatedUsers[editIndex] = editData;
    setFilteredUsers(updatedUsers);
    setEditIndex(-1);
    setEditData({ name: '', registerNo: '', dob: '', createdDate: '', status: '' });
  };

  const handleCancel = () => {
    setEditIndex(-1);
    setEditData({ name: '', registerNo: '', dob: '', createdDate: '', status: '' });
  };

  const handleDelete = (index: number) => {
    const updatedUsers = filteredUsers.filter((_, i) => i !== index);
    setFilteredUsers(updatedUsers);
  };

  const handleActivate = (index: number) => {
    const updatedUsers = [...filteredUsers];
    updatedUsers[index].status = 'Active';
    setFilteredUsers(updatedUsers);
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
      <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
        <Typography variant="h5">User Information</Typography>
      </Grid>
      <Grid container justifyContent="center" style={{ marginTop: '10px' }}>
        <Paper
          elevation={3}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            width: '80%',
            backgroundColor: '#fafafa',
            borderRadius: '20px',
            marginBottom: '20px'
          }}
        >
          {filteredUsers.length === 0 ? (
            <Typography variant="body1">User not found</Typography>
          ) : (
            <div className="users-information">
              {filteredUsers.map((user, index) => (
                <Card key={index} style={{ margin: '10px 0', width: '100%', position: 'relative', minWidth: '300px', height: '180px' }}>
                  <CardContent>
                    {editIndex === index ? (
                      <>
                        <TextField
                          label="Name"
                          value={editData.name}
                          onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                          fullWidth
                          style={{ marginBottom: '10px' }}
                        />
                        <TextField
                          label="Register No."
                          value={editData.registerNo}
                          onChange={(e) => setEditData({ ...editData, registerNo: e.target.value })}
                          fullWidth
                          style={{ marginBottom: '10px' }}
                        />
                        <TextField
                          label="DOB"
                          value={editData.dob}
                          onChange={(e) => setEditData({ ...editData, dob: e.target.value })}
                          fullWidth
                          style={{ marginBottom: '10px' }}
                        />
                        <TextField
                          label="Created Date"
                          value={editData.createdDate}
                          onChange={(e) => setEditData({ ...editData, createdDate: e.target.value })}
                          fullWidth
                          style={{ marginBottom: '10px' }}
                        />
                        <Grid container justifyContent="center">
                          <Button variant="contained" color="primary" onClick={handleSave} style={{marginRight: '10px'}}>
                            Save
                          </Button>
                          <Button variant="contained" onClick={handleCancel}>
                            Cancel
                          </Button>
                        </Grid>
                      </>
                    ) : (
                      <>
                        <Typography >Name: {user.name}</Typography>
                        <Typography>Register No: {user.registerNo}</Typography>
                        <Typography>DOB: {user.dob}</Typography>
                        <Typography>Created Date: {user.createdDate}</Typography>
                        <span
                          style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            backgroundColor: user.status === 'Active' ? 'green' : 'lightcoral',
                            color: 'white',
                            padding: '5px',
                            borderRadius: '5px'
                          }}
                        >
                          {user.status}
                        </span>
                        {user.status === "Inactive" && (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleActivate(index)}
                            style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}
                          >
                            Activate
                          </Button>
                        )}
                      </>
                    )}
                  </CardContent>
                  <div style={{ position: 'absolute', bottom: '65px', right: '10px' }}>
                    <EditIcon
                      style={{ cursor: 'pointer', marginRight: '10px', display: editIndex === index ? 'none' : 'inline' }}
                      onClick={() => handleEdit(index)}
                    />
                    <DeleteIcon
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleDelete(index)}
                    />
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Paper>
      </Grid>
    </Box>
  );
}

export default ManageUser;
