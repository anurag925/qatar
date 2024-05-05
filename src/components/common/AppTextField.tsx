import React, { CSSProperties } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

const AppTextFieldStyle: CSSProperties = {
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  borderRadius: "5px",
  marginBottom: '10px'

};

interface AppTextFieldProps{
}

const AppTextField: React.FC<AppTextFieldProps & TextFieldProps> = (props) => {
  const style = {...AppTextFieldStyle, ...props.style}
  return (
    <TextField fullWidth variant='outlined' {...props} style={style}/>
  );
}

export default AppTextField;
