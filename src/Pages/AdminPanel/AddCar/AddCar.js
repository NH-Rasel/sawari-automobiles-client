import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const AddCar = () => {
    const [addCar, setAddCar] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...addCar };
        newInfo[field] = value;
        setAddCar(newInfo);
    }

    const handleAddCar = e => {
        const newCar = { ...addCar }
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
        e.preventDefault();

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
                        name="title"
                        onBlur={handleOnBlur}
                        placeholder="Car Name"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        type="text"
                        name="brand"
                        onBlur={handleOnBlur}
                        placeholder="Brand Name"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        type="link"
                        name="img"
                        onBlur={handleOnBlur}
                        placeholder="Car Image URL"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-multiline-static"
                        type="text"
                        name="description"
                        onBlur={handleOnBlur}
                        multiline
                        rows={4}
                        placeholder="Description"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="price"
                        onBlur={handleOnBlur}
                        type="number"
                        placeholder="Price"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="rating"
                        onBlur={handleOnBlur}
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