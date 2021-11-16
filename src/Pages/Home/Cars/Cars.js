import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Car from './Car/Car';


const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCars(data)
            )
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 4 }} variant="h4" gutter component="div">
                    Car Collection
                </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} item xs={12} sm={6} md={4}>
                    {
                        cars.slice(0, 6).map(car => <Car key={car._id}
                            car={car}
                        ></Car>)
                    }
                </Grid>
                <Link style={{ textDecoration: 'None', backgroundColor: '#306EFF', color: 'white', padding: '10px', borderRadius: '5px' }} to="/explore"><Button sx={{ m: 3 }} variant="container">Explore more collection </Button></Link>
            </Container>
        </Box>
    );
};

export default Cars;