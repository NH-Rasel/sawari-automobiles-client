import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';


const Review = () => {
    const [addReview, setAddReview] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...addReview };
        newInfo[field] = value;
        setAddReview(newInfo);
    }

    const handleReviewSubmit = e => {

        const sendReview = { ...addReview };
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sendReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review send successfully')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <Container>
            <Box>
                <Typography id="transition-modal-title" variant="h6" sx={{ textAlign: 'center' }} component="h2">
                    Send Review
                </Typography>
                <form onSubmit={handleReviewSubmit}>
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        type="text"
                        name="name"
                        onBlur={handleOnBlur}
                        placeholder="Your Name"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        type="link"
                        name="img"
                        onBlur={handleOnBlur}
                        placeholder="Your Image URL"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-multiline-static"
                        name="description"
                        onBlur={handleOnBlur}
                        multiline
                        rows={4}
                        placeholder="Description"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="rating"
                        onBlur={handleOnBlur}
                        type="number"
                        placeholder="Rate in number"
                    />
                    <br />
                    <Button type="submit" variant='contained'>Send</Button>
                </form>
            </Box>
        </Container>
    );
};

export default Review;