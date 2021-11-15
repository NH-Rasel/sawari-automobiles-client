import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Divider } from '@mui/material';
import Navigation from '../../Shared/Navigation/Navigation';

const CarDetails = () => {
    const { carId } = useParams();
    const [carDetails, setCarDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/cars/${carId}`)
            .then(res => res.json())
            .then(data => setCarDetails(data))
    }, [carId]);
    return (
        <>
            <Navigation />
            <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 'auto' }}
                    image={carDetails.img}
                    alt=""
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {carDetails.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Brand: {carDetails.brand}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Ratings: {carDetails.rating}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Price: ${carDetails.price}
                        </Typography>
                        <br />
                        <Divider />
                        <Button>Order Now</Button>
                    </CardContent>
                </Box>
            </Card>
        </>
    );
};

export default CarDetails;