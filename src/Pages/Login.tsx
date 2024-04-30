import { Alert, AppBar, CssBaseline, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from 'react';
import { loginApi } from '../helpers/apis';

export const Login = (): JSX.Element => {

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };


  const [formData, setFormData] = useState({
    mobile: "",
  });
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(loginApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            mobile_number: formData.mobile,
          },
        }),
      });

      const responseData = await response.json();
      if (response.ok) {
        if (responseData.success) {
          if (responseData?.data?.msg == "Otp sent successfully"){
            localStorage.setItem("mobile_number", formData.mobile);
            navigate("/otp");
          }else{
            setAlertMessage(responseData?.data?.msg);
          }
        } else {
          setAlertMessage(responseData?.message);
        }
      } else {
        setAlertMessage(responseData?.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlertMessage("An error occurred. Please try again.");
    }
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar position="static" elevation={0} style={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton aria-label="go back" sx={{ marginRight: "10%", color: "black" }} onClick={goBack} >
            <ArrowBackIosIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box display='flex' flexDirection='column' padding='10%'>
        <Typography style={{ fontSize: '20px', fontWeight: '500', lineHeight: '30px', textAlign: 'left' }}>Welcome</Typography>
        <Typography style={{ fontSize: '12px', fontWeight: '500', lineHeight: '18px', textAlign: 'left', color: 'grey' }}>Sign in to your account</Typography>
        {alertMessage && (
          <Alert variant="filled" severity="info">
            {alertMessage}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <TextField fullWidth autoFocus variant="outlined" margin="normal" id="mobile" label="Enter Registered Mobile Number" name="mobile" autoComplete="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          <Button type="submit" fullWidth variant="contained" style={{ marginTop: "24px", backgroundColor: "#1a5435", color: "white", borderRadius: '20px' }}>
            Send Otp
          </Button>
        </form>
      </Box>
    </Box>
  )
}
