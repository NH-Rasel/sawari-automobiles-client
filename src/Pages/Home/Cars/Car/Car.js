import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Paper, Rating } from '@mui/material';

const Car = (props) => {
    const { _id, img, title, brand, price, rating, horsepower } = props.car;
    return (
        <>
            <Paper elevation={3} sx={{ m: 3 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', padding: '10px' }}
                    image={img}
                    alt="green iguana"
                />
                <Typography variant="h5" gutterBottom component="div">
                    {title}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    Brand: {brand}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: ${price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Horsepower: {horsepower}
                </Typography> <br />
                <Rating name="half-rating" defaultValue={rating} precision={0.5} size="small" readOnly /><br />
                <Link to={`/carDetails/${_id}`} style={{ textDecoration: 'none' }}><Button style={{ textDecoration: 'none', backgroundColor: 'orange', padding: '8px', borderRadius: '5px' }} sx={{ m: 3, color: 'black' }}>See Details</Button></Link>
            </Paper>
        </>
    );
};

export default Car;