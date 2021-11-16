import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const ManageOrders = () => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, []);

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
                Manage All Orders
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="order table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Buyer</TableCell>
                            <TableCell align="right">Car Model</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Options</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {order.map((orders) => (
                            <TableRow
                                key={orders._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {orders.buyerName}
                                </TableCell>
                                <TableCell align="right">{orders.carName}</TableCell>
                                <TableCell align="right">${orders.price}</TableCell>
                                <TableCell align="right">{orders.status}</TableCell>
                                <TableCell align="right"><Link to={`/updateOrders/${orders._id}`}><Button style={{ border: 'none', borderRadius: '3px', margin: '2px', backgroundColor: 'orange', padding: '8px', color: 'white' }} className="btn btn-warning"><i className="fas fa-sync-alt"></i></Button></Link>
                                    <Button onClick={() => handleDeleteOrder(orders._id)} style={{
                                        border: 'none',
                                        borderRadius: '3px', margin: '2px', backgroundColor: 'red', padding: '8px', color: 'white'
                                    }}><i className="far fa-trash-alt"></i></Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ManageOrders;