import { BottomNavigation, Button, Container, Divider, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <BottomNavigation position="absolute" sx={{ my: 8 }} >
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                divider={<Divider orientation="vertical" flexItem />}
                spacing={{ xs: 1, sm: 2, md: 8 }}
            ><Container>
                    <Typography variant="h6" gutterBottom component="div" sx={{ color: 'orange' }}>
                        Subscribe Our Newsletter
                    </Typography>
                    <Box display="flex" justifyContent="center"
                        alignItems="center">
                        <TextField style={{ width: '200px', height: '50px', borderRadius: '5px', margin: '5px' }}
                            label="Your Email"
                            variant="filled"
                            color="primary"
                            size="small"
                        />
                        <Button style={{ textDecoration: 'None', backgroundColor: 'black', padding: '12px', borderRadius: '5px' }} sx={{ color: 'aqua' }} size="large">Subscribe</Button>
                    </Box>
                    <Typography variant="h6" gutterBottom component="div" sx={{ color: 'orange' }}>
                        Follow US
                    </Typography>
                    <Box>
                        <a href="https://www.facebook.com/"><i style={{ fontSize: '30px', color: 'black', margin: '10px' }} className="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/"><i style={{ fontSize: '30px', color: 'black', margin: '10px' }} className="fab fa-instagram"></i></a>
                        <a href="https://twitter.com"><i style={{ fontSize: '30px', color: 'black', margin: '10px' }} className="fab fa-twitter"></i></a>
                    </Box>
                </Container>
                <Container>
                    <Typography variant="h6" gutterBottom component="div" sx={{ color: 'orange' }}>
                        Contact US
                    </Typography>
                    <Typography variant="body2" gutterBottom sx={{ color: 'black' }}>
                        info@sawari_automobiles
                    </Typography>
                    <Box display="flex" justifyContent="center"
                        alignItems="center">
                        <i style={{ fontSize: '20px', color: 'orange', marginRight: '8px' }} className="fas fa-location-arrow"></i>
                        <Typography variant="body2" gutterBottom sx={{ color: 'black' }}>
                            2752, Willison Street, <br /> Eagan, United State
                        </Typography>
                    </Box>
                </Container>
                <Container>
                    <Typography variant="h6" gutterBottom sx={{ color: 'orange' }}>
                        We Accepts
                    </Typography>
                    <Box>
                        <i style={{ fontSize: '40px', color: 'black', marginRight: '8px' }} className="fab fa-cc-visa"></i>
                        <i style={{ fontSize: '40px', color: 'black', marginRight: '8px' }} className="fab fa-cc-mastercard"></i><br />
                        <i style={{ fontSize: '40px', color: 'black', marginRight: '8px' }} className="fab fa-cc-paypal"></i>
                        <i style={{ fontSize: '40px', color: 'black', marginRight: '8px' }} className="fab fa-cc-discover"></i>
                    </Box>
                </Container>
            </Stack>
        </BottomNavigation>
    );
};

export default Footer;