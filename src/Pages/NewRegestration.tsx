import React, { useState } from "react";
import {
  TextField,
  Button,
  IconButton,
  Container,
  CssBaseline,
  Typography,
  Paper,
  Alert,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { registrationApi } from "../helpers/apis";

const NewRegistration: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    dob: "",
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
      const response = await fetch(registrationApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            mobile_number: formData.mobile,
            dob: formData.dob,
            type: "admin",
          },
        }),
      });

      const responseData = await response.json();
      if (response.ok) {
        navigate("/otp");
      } else {
        setAlertMessage(responseData?.data?.msg || "An error occurred.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlertMessage("An error occurred. Please try again.");
    }
  };

  const goBack = () => {
    navigate("/");
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar position="static" style={{ backgroundColor: "#1a5435" }}>
        <Toolbar>
          <IconButton
            aria-label="go back"
            sx={{ marginRight: "10%", color: "white" }}
            onClick={goBack}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h6" align="center">
            New Registration
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xs" style={{ marginTop: "10%" }}>
        <Paper elevation={3} style={{ padding: "20px", borderRadius: "20px" }}>
          <Typography component="h1" variant="h5" align="center">
            Register
          </Typography>
          {alertMessage && (
            <Alert variant="filled" severity="info">
              {alertMessage}
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Enter name"
              name="name"
              autoComplete="name"
              autoFocus
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="mobile"
              label="Enter mobile number"
              name="mobile"
              autoComplete="tel"
              value={formData.mobile}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="dob"
              label="DOB"
              name="dob"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={formData.dob}
              onChange={handleChange}
            />

            {/* <Select
              variant="outlined"
              margin="dense"
              // defaultValue={'admin'}
              required
              fullWidth
              // id="type"
              // name="type"
              label="Type"
              // value={formData.type}
              
            >
              <MenuItem value={'admin'}>Admin</MenuItem>
              <MenuItem value={'area_development_officer'}>Area Development Officer</MenuItem>
              <MenuItem value={'master_distributor'}>Master Distributor</MenuItem>
              <MenuItem value={'super_distributor'}>Super Distributor</MenuItem>
              <MenuItem value={'distributor'}>Distributor</MenuItem>
            </Select> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{
                marginTop: "24px",
                backgroundColor: "#1a5435",
                color: "white",
              }}
            >
              Register
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default NewRegistration;
