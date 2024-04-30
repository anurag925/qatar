import { Alert, AppBar, CssBaseline, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from 'react';
import { loginApi } from '../helpers/apis';

export const Otp = (): JSX.Element => {

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };


  const [formData, setFormData] = useState({
    otp: "",
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
      const mobile_number = localStorage.getItem("mobile_number");
      const response = await fetch(loginApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            mobile_number: mobile_number,
            otp: formData.otp,
          },
        }),
      });

      const responseData = await response.json();
      if (response.ok) {
        if (responseData.success) {
          if (responseData?.data?.token){
            localStorage.setItem("user_token", responseData.data.token);
            localStorage.setItem("user", responseData.data.user);
            navigate("/admin");
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
        <Typography style={{ fontSize: '12px', fontWeight: '500', lineHeight: '18px', textAlign: 'left' }}>
          Enter Otp sent on your phone
        </Typography>
        {alertMessage && (
          <Alert variant="filled" severity="info">
            {alertMessage}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <TextField fullWidth autoFocus variant="outlined" margin="normal" id="mobile" label="OTP" name="otp" autoComplete="otp"
            value={formData.otp}
            onChange={handleChange}
          />
          <Button type="submit" fullWidth variant="contained" style={{ marginTop: "24px", backgroundColor: "#1a5435", color: "white", borderRadius: '20px' }}>
            Confirm
          </Button>
        </form>
      </Box>
    </Box>
  )
}
