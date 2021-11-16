import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Car from './Car/Car';


const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://pure-wildwood-91455.herokuapp.com/cars')
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
                <Link style={{ textDecoration: 'None' }} to="/explore"><Button style={{ textDecoration: 'None', backgroundColor: 'black', padding: '10px', borderRadius: '5px' }} sx={{ m: 3, color: 'aqua' }}>Explore more collection </Button></Link>
            </Container>
        </Box>
    );
};

export default Cars;