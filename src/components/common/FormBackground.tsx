import React from 'react';
import { Paper } from '@mui/material';

interface FormBackgroundProps {
  children: React.ReactNode; // Accepts any React nodes as children
}

const paperStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  marginTop: '10%',
  padding: '16px',
  maxWidth: '90%',
  backgroundColor: '#fafafa',
  borderRadius: '20px',
  border: '1px solid #ccc',
}

const FormBackground: React.FC<FormBackgroundProps> = ({ children }) => {
  return (
    <Paper style={paperStyle}>
      {children}
    </Paper>
  );
}

export default FormBackground;
