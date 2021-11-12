import { CardMedia, Paper, Typography } from '@mui/material';
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
                <Typography variant="body1">
                    Ratings: {rating}
                </Typography>
            </Box>
        </Paper>
    );
};

export default Review;