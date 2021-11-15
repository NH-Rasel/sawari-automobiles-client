import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Container, Divider } from '@mui/material';
import Navigation from '../../Shared/Navigation/Navigation';
import Order from '../Order/Order';

const CarDetails = () => {
    const { carId } = useParams();
    const [carDetails, setCarDetails] = useState({});
    const [openOrder, setOrderOpen] = React.useState(false);
    const handleOrderOpen = () => setOrderOpen(true);
    const handleOrderClose = () => setOrderOpen(false);

    useEffect(() => {
        fetch(`http://localhost:5000/cars/${carId}`)
            .then(res => res.json())
            .then(data => setCarDetails(data))
    }, [carId]);
    return (
        <>
            <Navigation />
            <Container>
                <Card sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', margin: '20px', padding: '10px', maxWidth: '530px' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 'auto', marginRight: '50px' }}
                        image={carDetails.img}
                        alt=""
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto', textAlign: 'start', marginLeft: '20px' }}>
                            <Typography component="div" variant="h5">
                                {carDetails.title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Ratings: {carDetails.rating}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Brand: {carDetails.brand}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Price: ${carDetails.price}
                            </Typography>
                            <br />
                            <Divider />
                            <Button onClick={handleOrderOpen} variant="outlined">Order Now</Button>
                        </CardContent>
                    </Box>
                </Card>
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