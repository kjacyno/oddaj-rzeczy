import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useStoreActions, useStoreState} from "easy-peasy";
import PropTypes from 'prop-types';
import {useEffect, useState} from "react";
import * as React from 'react';
import {Link} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';
import {logOut} from '../firebase/firebaseAuth.js';

function Header() {
    const [user, setUser] = useState('')
    const storeUser = useStoreState((state) => state.user);
    const userLogout = useStoreActions((action) => action.userLogout);

    useEffect(() => {
        setUser(storeUser)
    },[])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        userLogout;
        logOut(setUser);
    };
    const handleCloseNoLogout = () => {
        setAnchorEl(null);
    };
    return (
        <nav className="nav-menu">
            <div className='user-btns'>
                {user ? (<>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <h2>Cześć {user.displayName}</h2>

                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleCloseNoLogout}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem id='logout' onClick={handleClose}>
                            Logout
                        </MenuItem>
                    </Menu>
                </>) : (<>
                    <Link to={'/login'} className='menu-link'>Zaloguj</Link>
                    <Link to={'/register'} className='menu-link'>Załóż konto</Link>
                </>)
                }
            </div>
            <div className="menu-list">

                <li><ScrollLink to="home-header" spy={true} smooth={true}
                                offset={50} duration={500}>Start</ScrollLink></li>
                <li><ScrollLink to="idea" spy={true} smooth={true} offset={50}
                                duration={500}>O co chodzi?</ScrollLink></li>
                <li><ScrollLink to="about" spy={true} smooth={true} offset={50}
                                duration={500}>O nas</ScrollLink></li>
                <li><ScrollLink to="organizations" spy={true} smooth={true}
                                offset={50} duration={500}>Fundacja i
                    organizacje</ScrollLink></li>
                <li><ScrollLink to="contact" spy={true} smooth={true}
                                offset={50} duration={500}>Kontakt</ScrollLink></li>
            </div>
        </nav>
    );
}

Header.propTypes = {
    user: PropTypes.any,
    setUser: PropTypes.func,
};
export default Header;