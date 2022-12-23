import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HorizontalGallery from 'react-dynamic-carousel';
import Review from './Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://sawari-automobiles-server.onrender.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container>
            <Typography sx={{ m: 5 }} variant="h4" gutterBottom component="div">
                Our Clients Feedback
            </Typography>
            <HorizontalGallery
                tiles={
                    reviews.map(review => <Review key={review._id}
                        review={review}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 350,
                            backgroundColor: '#D0D0D0',
                            borderRadius: 10
                        }}
                    ></Review>)
                }
                elementWidth={300}
                fadeDistance={30}
                minPadding={20}
            />
        </Container>
    );
};

export default Reviews;