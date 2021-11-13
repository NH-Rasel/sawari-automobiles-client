import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Navigation from '../../../Shared/Navigation/Navigation';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...registerData };
        newLoginData[field] = value;
        setRegisterData(newLoginData);
    }
    const handleRegisterSubmit = e => {
        if (registerData.password !== registerData.password2) {
            alert('password did not match');
            return
        }
        registerUser(registerData.email, registerData.password, registerData.name, history);
        e.preventDefault();
    }
    return (
        <div>
            <Navigation />
            <Container>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>Register
                        </Typography>
                        {!isLoading && <form onSubmit={handleRegisterSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                type="text"
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                type="email"
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                type="password"
                                id="standard-basic"
                                label="Your Password"
                                name="password"
                                onBlur={handleOnBlur} variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                type="password"
                                id="standard-basic"
                                label=" Re-TypeYour Password"
                                name="password2"
                                onBlur={handleOnBlur} variant="standard" />
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                            <Typography variant="body1">
                                Already Registered?
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to="/login">
                                    <Button sx={{ m: 1 }} variant="text">Login</Button>
                                </NavLink>
                            </Typography>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User registered successfully</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src="https://i.ibb.co/grxqWxq/login-img.png" alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Register;