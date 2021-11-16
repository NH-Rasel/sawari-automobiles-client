import React, { useState } from 'react';
import { Button, TextField, Alert, Typography } from '@mui/material';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <Typography variant="h4" sx={{ m: 3, color: 'orange', fontWeight: '700' }}>Make an admin</Typography>
            <form onClick={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button style={{ backgroundColor: 'black', padding: '12px', borderRadius: '5px' }} sx={{ color: 'aqua' }} type="submit">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made admin successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;