import React, { useEffect, useState } from 'react';
import { TextField, Button, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import '../Navbar.css'; 
import lgs from "./NEWS PERIOD (5).png";

const Navbar = () => {
    const [username, setUsername] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('name');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem('name');
        setUsername(null);
        handleClose();
        navigate('/login');
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const getFirstLetter = (name) => {
        return name ? name.charAt(0).toUpperCase() : '';
    };

    return (
        <div className="navbar">
            <div className="navbar-class">
                <div className="navbar-logo">
                    <img src={lgs} alt="Logo" className="navbar-logo-image" />
                    <p className="navbar-title">NEWS PERIOD</p>
                </div>
                <TextField
                    placeholder="Search..."
                    size="small"
                    className="navbar-search" 
                />
                <div className="navbar-button-group">
                    <Button 
                        component={Link} 
                        to="/" 
                        className="navbar-button"
                    >
                        HOME
                    </Button>
                    <Button 
                        component={Link} 
                        to="/newsfeed" 
                        className="navbar-button"
                    >
                        NEWSFEED
                    </Button>
                    <Button 
                        component={Link} 
                        to="/bot" 
                        className="navbar-button"
                    >
                        BOT
                    </Button>
                    <Button 
                        component={Link} 
                        to="/top-headlines" 
                        sx={{ 
                            color: '#fff', 
                            textTransform: 'none', 
                            '&:hover': { color: '#ffccbc' }
                        }}
                        className="navbar-button"
                    >
                        UPDATES
                    </Button>
                    {username && (
                        <>
                            <Button 
                                aria-controls="simple-menu" 
                                aria-haspopup="true" 
                                onClick={handleMenu} 
                                className="navbar-username-button"
                            >
                                {getFirstLetter(username)}
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </Menu>
                        </>
                    )}
                    {!username && (
                        <>
                            <Button 
                                component={Link} 
                                to="/login" 
                                className="navbar-button"
                            >
                                LOGIN
                            </Button>
                            <Button 
                                component={Link} 
                                to="/signup" 
                                className="navbar-button"
                            >
                                SIGNUP
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
