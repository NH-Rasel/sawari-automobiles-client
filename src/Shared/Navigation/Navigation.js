import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    const theme = useTheme();
    const useStyle = makeStyles({
        navItem: {
            color: 'black'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none!important'
            },
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none!important'
            },
        }
    })
    const { navItem, navIcon, navItemContainer } = useStyle()
    const [state, setState] = React.useState(false);
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar className={navItem} position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/home"><img src="https://i.ibb.co/SmmzC8m/logo.png" alt="" /></Link>
                        <Box sx={{ display: 'flex', alignItems: 'center' }} className={navItemContainer}>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/home"><Button style={{ fontWeight: 700 }} color="inherit">Home</Button></Link>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/explore"><Button style={{ fontWeight: 700 }} color="inherit">Explore</Button></Link>
                            {
                                user?.email ?
                                    <Box>
                                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard"><Button color="inherit">Dashboard</Button></NavLink>
                                        <Button onClick={logOut} style={{ fontWeight: 700 }} color="inherit">Logout</Button>
                                    </Box>
                                    :
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login"><Button style={{ fontWeight: 700 }} color="inherit">Login</Button></NavLink>
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        <Box
                            sx={{ width: 250 }}
                            role="presentation"
                        >
                            <List>
                                <ListItem button>
                                    <ListItemText><Link style={{ textDecoration: 'none' }} to="/home"><Button color="inherit">Home</Button></Link></ListItemText>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText><Link style={{ textDecoration: 'none' }} to="/explore"><Button color="inherit">Explore</Button></Link></ListItemText>
                                </ListItem>

                                <ListItem button>
                                    {
                                        user?.email ?
                                            <ListItem button>
                                                <ListItemText><Link style={{ textDecoration: 'none' }} to="/dashboard"><Button color="inherit">Dashboard</Button></Link></ListItemText>
                                                <Button onClick={logOut} color="inherit">Logout</Button>
                                            </ListItem>
                                            :
                                            <ListItemText><Link style={{ textDecoration: 'none' }} to="/login"><Button color="inherit">Login</Button></Link></ListItemText>
                                    }
                                </ListItem>
                            </List>
                        </Box>
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
};

export default Navigation;