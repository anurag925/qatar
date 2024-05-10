import React, { useState } from 'react';
import { Button, Container, IconButton, Typography, Divider } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import {CssBaseline} from "@mui/material";

function ManageContent(): JSX.Element {
  const [photos, setPhotos] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, fileType: string) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const newFiles = fileType === 'image' ? [...photos] : [...videos];
    newFiles.push(URL.createObjectURL(file));
    fileType === 'image' ? setPhotos(newFiles) : setVideos(newFiles);
  };

  const handleAddFile = (fileType: string) => {
    const inputId = fileType === 'image' ? 'upload-image' : 'upload-video';
    document.getElementById(inputId)?.click();
  };

  const handleDeleteFile = (index: number, fileType: string) => {
    const newFiles = fileType === 'image' ? [...photos] : [...videos];
    newFiles.splice(index, 1);
    fileType === 'image' ? setPhotos(newFiles) : setVideos(newFiles);
  };

  const goBack = () => {
    navigate('/Admin');
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
           Manage Content
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ margin: '20px' }}>
        <Typography variant="h6">Upload Image</Typography>
        <Typography>Maximum number of photos: 5</Typography>
        <input
          accept="image/*"
          type="file"
          id="upload-image"
          hidden
          onChange={(event) => handleFileUpload(event, 'image')}
        />
        <div style={{ display: 'flex', overflowX: 'auto', marginTop: '10px' }}>
          {photos.map((photo, index) => (
            <div key={index} style={{ position: 'relative' }}>
              <IconButton
                onClick={() => handleDeleteFile(index, 'image')}
                style={{ position: 'absolute', top: 0, right: 0, zIndex: 1, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
              >
                <CloseIcon />
              </IconButton>
              <img
                src={photo}
                alt={`Uploaded Photo ${index + 1}`}
                style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '10px', marginBottom: '10px' }}
              />
            </div>
          ))}
          {photos.length < 5 && (
            <IconButton onClick={() => handleAddFile('image')} sx={{ backgroundColor: '#f0ffea', color: 'grey', marginTop: '5%', width: '100px', height: '100px' }}>
              <AddIcon />
            </IconButton>
          )}
        </div>
      </Container>
      <Divider sx={{ margin: '20px' }} />
      <Container sx={{ margin: '20px' }}>
        <Typography variant="h6">Upload Video</Typography>
        <Typography>Maximum number of Video: 5</Typography>
        <input
          accept="video/*"
          type="file"
          id="upload-video"
          hidden
          onChange={(event) => handleFileUpload(event, 'video')}
        />
        <div style={{ display: 'flex', overflowX: 'auto', marginTop: '10px' }}>
          {videos.map((video, index) => (
            <div key={index} style={{ position: 'relative' }}>
              <IconButton
                onClick={() => handleDeleteFile(index, 'video')}
                style={{ position: 'absolute', top: 0, right: 0, zIndex: 1, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
              >
                <CloseIcon />
              </IconButton>
              <video
                controls
                src={video}
                style={{ width: '150px', height: '100px', marginRight: '10px', marginBottom: '10px' }}
              />
            </div>
          ))}
          {videos.length < 5 && (
            <IconButton onClick={() => handleAddFile('video')} sx={{ backgroundColor: '#f0ffea', color: 'grey', marginTop: '5%', width: '100px', height: '100px' }}>
              <AddIcon />
            </IconButton>
          )}
        </div>
      </Container>
      <Divider sx={{ margin: '20px' }} />
      <Typography align="center" sx={{ backgroundColor: '#f4f4f4', padding: '10px', margin: '7%', borderRadius: '5px' }}>Upload downloadable content</Typography>
      <Button
        sx={{
          backgroundColor: '#1a5435',
          borderRadius: '50px',
          color: 'white',
          textTransform: 'none',
          display: 'block',
          margin: 'auto',
          marginTop: '10px',
          padding: '10px 70px',
          fontSize: '15px'
        }}
      >
        Post content
      </Button>
    </Box>
  );
};

export default ManageContent;
