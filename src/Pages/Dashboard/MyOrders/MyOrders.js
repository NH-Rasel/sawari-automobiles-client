import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Container, Typography } from '@mui/material';

const MyOrders = () => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    //Delete a order
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Confirm Delete?')
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingOrder = order.filter(orders => orders._id !== id);
                        setOrder(remainingOrder);
                    }
                })
        }
    }
    return (
        <Container>
            <Typography variant='h3' sx={{ margin: '10px' }}>
                My Order History
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Paper elevation={3} style={{ padding: '20px' }}>
                    {
                        order?.map(orders => <Box
                            key={orders._id}
                        >
                            <h4>Buyer: {orders.buyerName}</h4>
                            <h5>Car Model: <span className="fw-bold">{orders.carName}</span></h5>
                            <p>Price: ${orders.price}</p>
                            <p>Status: {orders.status}</p>
                            <button onClick={() => handleDeleteOrder(orders._id)} className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                        </Box>)
                    }
                </Paper>
            </Box>
        </Container>
    );
};

export default MyOrders;