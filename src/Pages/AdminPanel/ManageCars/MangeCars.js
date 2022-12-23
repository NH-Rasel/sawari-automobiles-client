import { Container, Grid, Paper, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const MangeCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://sawari-automobiles-server.onrender.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    //Delete a car
    const handleDeleteCar = id => {
        const proceed = window.confirm('Confirm Delete?')
        if (proceed) {
            fetch(`https://sawari-automobiles-server.onrender.com/cars/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingCar = cars.filter(cars => cars._id !== id);
                        setCars(remainingCar);
                    }
                })
        }
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography variant="h4" sx={{ m: 3, color: 'orange', fontWeight: '700' }} component="div">
                        Explore Cars
                    </Typography>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} item xs={12} sm={6} md={4}>
                        {
                            cars.map(car => <Paper key={car._id}
                            >
                                <CardMedia
                                    component="img"
                                    style={{ width: 'auto', padding: '10px' }}
                                    image={car.img}
                                    alt="green iguana"
                                />
                                <Typography variant="h5" gutterBottom component="div">
                                    {car.title}
                                </Typography>
                                <Typography variant="h6" gutterBottom component="div">
                                    Brand: {car.brand}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Price: ${car.price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Horsepower: {car.horsepower}
                                </Typography>
                                <Button onClick={() => handleDeleteCar(car._id)} style={{
                                    border: 'none',
                                    borderRadius: '3px', margin: '8px', backgroundColor: 'red', padding: '10px', color: 'white'
                                }}><i className="far fa-trash-alt"></i></Button>
                            </Paper>)
                        }
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default MangeCars;