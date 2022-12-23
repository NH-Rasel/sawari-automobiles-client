import { Alert, AlertTitle, Backdrop, Button, Fade, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

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

const Order = ({ openOrder, handleOrderClose, carDetails }) => {
    const { title, price } = carDetails;
    const { user } = useAuth();
    const initialInfo = { buyerName: user.displayName, email: user.email, phone: '', status: 'pending' }
    const [orderInfo, setOrderInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo);
    }

    const handleOrderSubmit = e => {
        const orders = {
            ...orderInfo,
            price,
            carName: title
        }
        fetch('https://sawari-automobiles-server.onrender.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    <Alert severity="success">
                        <AlertTitle>Car Ordered successfully</AlertTitle>
                    </Alert>
                    handleOrderClose();
                }
            });
        e.preventDefault();

    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openOrder}
            onClose={handleOrderClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openOrder}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" sx={{ textAlign: 'center' }} component="h2">
                        {title}
                    </Typography>
                    <form onSubmit={handleOrderSubmit}>
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="buyerName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue="Phone Number"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={price} disabled
                            size="small"
                        />
                        <Button type="submit" variant='contained'>Buy Now</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default Order;