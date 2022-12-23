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
        fetch('https://sawari-automobiles-server.onrender.com/cars', {
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
                <Typography id="transition-modal-title" variant="h4" sx={{ m: 3, color: 'orange', fontWeight: '700' }} component="h2">
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
                        name="engine_type"
                        onBlur={handleOnBlur}
                        placeholder="Engine-Type"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-multiline-static"
                        type="number"
                        name="seat"
                        onBlur={handleOnBlur}
                        placeholder="Seat"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-multiline-static"
                        type="text"
                        name="range"
                        onBlur={handleOnBlur}
                        placeholder="Range"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-multiline-static"
                        type="text"
                        name="horsepower"
                        onBlur={handleOnBlur}
                        placeholder="Horsepower"
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
                        placeholder="Rate in number(1-5)"
                    />
                    <Button type="submit" style={{ backgroundColor: 'black', padding: '12px', borderRadius: '5px' }} sx={{ color: 'aqua' }}>Add Car</Button>
                </form>
            </Box>
        </Container>
    );
};

export default AddCar;