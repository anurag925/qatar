import React, { CSSProperties } from 'react';
import { Button, ButtonProps } from '@mui/material';


const AppButtonStyle: CSSProperties = {
  backgroundColor: "#1a5435", 
  color: "white", 
  borderRadius: '20px',
  textTransform: 'none',
  display: 'block',
  fontFamily: 'Poppins',
  fontWeight: "bold",
  padding: '10px 70px',
};

interface CustomButtonProps extends ButtonProps {
  // Additional props if needed
}

const AppButton: React.FC<CustomButtonProps> = (props) => {
  const style = {...AppButtonStyle, ...props.style}
  return (
    <Button {...props} style={style}/>
  );
}

export default AppButton;
