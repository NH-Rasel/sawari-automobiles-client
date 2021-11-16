import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';

const AddCar = () => {
    const titleRef = useRef();
    const brandRef = useRef();
    const imgRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const ratingRef = useRef();

    const handleAddCar = e => {
        e.preventDefault();
        const title = titleRef.current.value;
        const brand = brandRef.current.value;
        const img = imgRef.current.value;
        const description = descriptionRef.current.value;
        const price = priceRef.current.value;
        const rating = ratingRef.current.value;

        const newCar = { title, brand, img, description, rating, price };
        fetch('http://localhost:5000/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added car')
                    e.target.reset();
                }
            })

    }
    return (
        <Container>
            <Box>
                <Typography id="transition-modal-title" variant="h4" sx={{ textAlign: 'center' }} component="h2">
                    Add a new Car
                </Typography>
                <form onSubmit={handleAddCar}>
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        type="text"
                        ref={titleRef}
                        placeholder="Car Name"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        type="text"
                        ref={brandRef}
                        placeholder="Brand Name"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        type="link"
                        ref={imgRef}
                        placeholder="Car Image URL"
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
                        ref={priceRef}
                        type="number"
                        placeholder="Price"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        ref={ratingRef}
                        type="number"
                        placeholder="Rate in number"
                    />
                    <Button type="submit" variant='contained' color="success">Add Car</Button>
                </form>
            </Box>
        </Container>
    );
};

export default AddCar;