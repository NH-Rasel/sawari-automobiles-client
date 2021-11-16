import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navigation from '../../../../Shared/Navigation/Navigation';

const UpdateOrders = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [id]);

    const handleStatusChange = e => {
        const updateStatus = e.target.value;
        const updatedStatus = { status: updateStatus }
        setOrder(updatedStatus);
    }

    const handleUpdateOrder = e => {
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully')
                    setOrder({});
                }
            })
        e.preventDefault()

    }

    return (
        <>
            <Navigation />
            <Container>
                <Typography id="transition-modal-title" variant="h6" sx={{ textAlign: 'center', m: 4 }} component="h2">
                    Update Order Status
                </Typography>
                <form onSubmit={handleUpdateOrder}>
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        type="text"
                        disabled
                        value={order.buyerName}
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        type="text"
                        disabled
                        value={order.carName}
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-multiline-static"
                        type="text"
                        disabled
                        value={order.price}
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        onChange={handleStatusChange}
                        value={order.status || ''}
                    />
                    <br />
                    <Button type="submit" variant='contained' color="warning">Update</Button>
                </form>
            </Container>
        </>
    );
};

export default UpdateOrders;