import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

const Review = () => {
    const nameRef = useRef();
    const imgRef = useRef();
    const descriptionRef = useRef();
    const ratingRef = useRef();

    const handleReviewSubmit = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const description = descriptionRef.current.value;
        const rating = ratingRef.current.value;

        const sendReview = { name, img, description, rating };
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

    }



    return (
        <Container>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" sx={{ textAlign: 'center' }} component="h2">
                    Send Review
                </Typography>
                <form onSubmit={handleReviewSubmit}>
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        type="text"
                        ref={nameRef}
                        placeholder="Your Name"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        type="link"
                        ref={imgRef}
                        placeholder="Your Image URL"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-multiline-static"
                        type="text"
                        ref={descriptionRef}
                        multiline
                        rows={4}
                        placeholder="Description"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        ref={ratingRef}
                        type="number"
                        placeholder="Rate in number"
                    />
                    <Button type="submit" variant='contained'>Send</Button>
                </form>
            </Box>
        </Container>
    );
};

export default Review;