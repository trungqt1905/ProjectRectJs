import MenuIcon from '@mui/icons-material/Menu';
import { Dialog, DialogActions, DialogContent } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Register from 'features/Auth/Component/Register';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    root: {

    },
    link: {
        color: '#fff',
        textDecoration: 'none'
    }
});
export default function Headers() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
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
                    <Button color="inherit" onClick={handleClickOpen}>Register</Button>
                </Toolbar>
            </AppBar>

            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <Register />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}