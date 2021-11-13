import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../../Shared/Navigation/Navigation';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <div>
            <Navigation />
            <Container>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>Login
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                type="email"
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                type="password"
                                id="standard-basic"
                                label="Your Password"
                                name="password"
                                onChange={handleOnChange} variant="standard" />
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                            <Typography variant="body1">
                                New User?
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to="/register">
                                    <Button sx={{ m: 1 }} variant="text">Register</Button>
                                </NavLink>
                            </Typography>
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">User registered successfully</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>
                        <p>---------Or----------</p>
                        <Button
                            onClick={handleGoogleSignIn}
                            sx={{ m: 1 }} variant="contained">Google Sign In</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src="https://i.ibb.co/grxqWxq/login-img.png" alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;