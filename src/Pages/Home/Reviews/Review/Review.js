import { CardMedia, Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Review = ({ review }) => {
    const { img, name, description, rating } = review;
    return (
        <Paper elevation={3}>
            <CardMedia
                component="img"
                style={{ width: 'auto', padding: '10px 0px' }}
                image={img}
                alt="..."
            />
            <Box sx={{ p: 2 }}>
                <Typography variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="body2" gutterBottom color="text.secondary">
                    "{description}"
                </Typography>
                <Rating name="half-rating" defaultValue={rating} precision={0.5} readOnly />
            </Box>
        </Paper>
    );
};

export default Review;