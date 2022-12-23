import { Button, Container, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const ManageOrders = () => {
    const { user } = useAuth();
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch(`https://sawari-automobiles-server.onrender.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [user.email]);

    //Delete a order
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Confirm Delete?')
        if (proceed) {
            fetch(`https://pure-wildwood-91455.herokuapp.com/orders/${id}`, {
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
            <Typography variant="h4" sx={{ m: 3, color: 'orange', fontWeight: '700' }}>
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