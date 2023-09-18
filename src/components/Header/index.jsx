import { Close } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Dialog, DialogContent, Menu, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Login from 'features/Auth/Component/Login';
import Register from 'features/Auth/Component/Register';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    link: {
        color: '#fff',
        textDecoration: 'none'
    },
    closeBtn: {

    },
});


const MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
}
export default function Headers() {
    const loggedInUser = useSelector(state => state.user.current);
    const isLoggedIn = !!loggedInUser.id;

    const [open, setOpen] = React.useState(false);
    const [mode, setMode] = React.useState(MODE.LOGIN);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUserClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };


    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link className={classes.link} to="/">LightShop</Link>
                    </Typography>
                    <NavLink to="/todos" className={classes.link}>
                        <Button color="inherit">Todos</Button>
                    </NavLink>
                    <NavLink to="/albums" className={classes.link}>
                        <Button color="inherit">Albums</Button>
                    </NavLink>

                    {!isLoggedIn && (
                        <Button color="inherit" onClick={handleClickOpen}>Login</Button>
                    )}

                    {isLoggedIn && (
                        <IconButton color='inherit' onClick={handleUserClick}>
                            <AccountCircleIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            <Menu
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleCloseMenu}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
            </Menu>

            <Dialog open={open} onClose={handleClose} >
                <DialogContent>

                    <IconButton >
                        <Close onClick={handleClose} />
                    </IconButton>

                    {mode === MODE.REGISTER && (
                        <>
                            <Register closeDialog={handleClose} />
                            <Button color='primary' onClick={() => setMode(MODE.LOGIN)}>Already have an account. login hear</Button>
                        </>
                    )}
                    {mode === MODE.LOGIN && (
                        <>
                            <Login closeDialog={handleClose} />
                            <Box>
                                <Button color='primary' onClick={() => setMode(MODE.REGISTER)}>Dont have an account. Register hear</Button>
                            </Box>
                        </>
                    )}

                </DialogContent>
            </Dialog>


        </Box>
    );
}