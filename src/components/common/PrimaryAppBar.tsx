import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface PrimaryAppBarProps {
  title: string;
  onBackButtonClick?: () => void; // Making onBackButtonClick optional
}

const PrimaryAppBar: React.FC<PrimaryAppBarProps> = ({ title, onBackButtonClick }) => {
  return (
    <AppBar position="sticky" style={{ backgroundColor: "#1a5435" }}>
      <Toolbar variant='dense'>
        <IconButton aria-label="go back" sx={{ marginRight: '10%', color: 'white' }} onClick={onBackButtonClick}>
          <ArrowBackIosIcon />
        </IconButton>
        <Typography alignSelf={"center"} fontFamily="Poppins" variant="h5" fontWeight={800}>{title}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default PrimaryAppBar;
