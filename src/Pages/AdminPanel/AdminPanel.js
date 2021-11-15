import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, List, ListItem } from '@mui/material';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import ManageOrders from '../AdminPanel/ManageOrders/ManageOrders';
import AddCar from '../AdminPanel/AddCar/AddCar';
import ManageCars from '../AdminPanel/ManageCars/MangeCars';
import MakeAdmin from '../AdminPanel/MakeAdmin/MakeAdmin';

const drawerWidth = 200;

function AdminPanel(props) {
    const { logOut, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar><Link style={{ textDecoration: 'none' }} to="/home"><Button color="inherit"> Go Home</Button></Link></Toolbar>
            <Divider />
            <ListItem>
                <Link style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
            </ListItem>
            {admin && <Box>
                <List>
                    <ListItem><Link style={{ textDecoration: 'none' }} to={`${url}/manageOrders`}><Button color="inherit">Manage Orders</Button></Link></ListItem>
                    <ListItem>
                        <Link style={{ textDecoration: 'none' }} to={`${url}/addCar`}><Button color="inherit">Add Car</Button></Link>
                    </ListItem>
                    <ListItem>
                        <Link style={{ textDecoration: 'none' }} to={`${url}/manageCar`}><Button color="inherit">Manage Car</Button></Link>
                    </ListItem>

                </List>
            </Box>}
            <Divider />
            <br />
            <ListItem>
                <Button onClick={logOut} color="inherit">Logout</Button>
            </ListItem>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        AdminPanel
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageOrders />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addCar`}>
                        <AddCar />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageCars`}>
                        <ManageCars />
                    </AdminRoute>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </Route>
                </Switch>
            </Box>
        </Box >
    );
};


export default AdminPanel;