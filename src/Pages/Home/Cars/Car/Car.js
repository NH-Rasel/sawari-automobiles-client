import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';

const Car = (props) => {
    const { img, title, brand, price, rating } = props.car;
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
                    Ratings: {rating}
                </Typography>
                <Link to="/carDetails"><Button>See Details</Button></Link>
            </Paper>
        </>
    );
};

export default Car;