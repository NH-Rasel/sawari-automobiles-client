import { Button, Container, Divider, Grid, Rating } from '@mui/material';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navigation from '../../Shared/Navigation/Navigation';
import Order from '../Order/Order';

const CarDetails = () => {
    const { carId } = useParams();
    const [carDetails, setCarDetails] = useState({});
    const [openOrder, setOrderOpen] = React.useState(false);
    const handleOrderOpen = () => setOrderOpen(true);
    const handleOrderClose = () => setOrderOpen(false);

    useEffect(() => {
        fetch(`https://sawari-automobiles-server.onrender.com/cars/${carId}`)
            .then(res => res.json())
            .then(data => setCarDetails(data))
    }, [carId]);
    return (
        <>
            <Navigation />
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid sx={{ display: 'flex', alignItems: 'center' }} container spacing={2}>
                        <Grid item xs={12} sm={5}>
                            <CardMedia
                                component="img"
                                sx={{ width: 'auto', marginRight: '50px' }}
                                image={carDetails.img}
                                alt=""
                            />
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto', textAlign: 'start', marginLeft: '20px' }}>
                                    <Typography component="div" variant="h5">
                                        {carDetails.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <span style={{ fontWeight: 700 }}>Brand:</span> {carDetails.brand}
                                    </Typography> <br />
                                    <Rating name="half-rating" defaultValue={carDetails.rating} precision={0.5} readOnly size="small" />
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <span style={{ fontWeight: 700 }}>Engine-Type:</span> {carDetails.engine_type}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <span style={{ fontWeight: 700 }}>Seat:</span> {carDetails.seat}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <span style={{ fontWeight: 700 }}>Range:</span> {carDetails.range}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <span style={{ fontWeight: 700 }}>Horsepower:</span> {carDetails.horsepower}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <span style={{ fontWeight: 700 }}>Price:</span> ${carDetails.price}
                                    </Typography>
                                    <br />
                                    <Divider />
                                    <Button sx={{ mt: 2 }} onClick={handleOrderOpen} variant="contained" color="primary">Order Now</Button>
                                </CardContent>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Order
                carDetails={carDetails}
                openOrder={openOrder}
                handleOrderClose={handleOrderClose}>
            </Order>
        </>
    );
};

export default CarDetails;