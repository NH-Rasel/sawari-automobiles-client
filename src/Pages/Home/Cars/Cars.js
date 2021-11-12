import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Car from './Car/Car';


const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography style={{ color: '#5CE7ED' }} sx={{ fontWeight: 500, m: 4, color: 'success.main' }} variant="h4" component="div">
                    OUR SERVICES
                </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} item xs={12} sm={6} md={4}>
                    {
                        cars.map(car => <Car
                            car={car}
                        ></Car>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Cars;