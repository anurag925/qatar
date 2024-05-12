import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

interface PrimaryAppBarProps {
  title: string;
}

const PrimaryAppBar: React.FC<PrimaryAppBarProps> = ({ title }) => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/admin');
  };

  return (
    <AppBar position="sticky" style={{ backgroundColor: "#1a5435" }}>
      <Toolbar variant='dense'>
        <IconButton aria-label="go back" sx={{ marginRight: '10%', color: 'white' }} onClick={handleBackButtonClick}>
          <ArrowBackIosIcon />
        </IconButton>
        <Typography alignSelf={"center"} fontFamily="Poppins" variant="h5" fontWeight={800}>{title}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default PrimaryAppBar;
