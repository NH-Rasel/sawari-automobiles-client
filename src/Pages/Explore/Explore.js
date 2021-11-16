import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Car from '../Home/Cars/Car/Car';

const Explore = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (
        <>
            <Navigation />
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography sx={{ fontWeight: 500, m: 4 }} variant="h4" component="div">
                        Explore Car Collection
                    </Typography>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} item xs={12} sm={6} md={4}>
                        {
                            cars.map(car => <Car key={car._id}
                                car={car}
                            ></Car>)
                        }
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Explore;