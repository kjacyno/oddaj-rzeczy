import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import * as React from 'react';
import {Link} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {logOut} from '../firebase/firebaseAuth.js';

function Header({user, setUser}) {

   const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        logOut(setUser);
    };
    const handleCloseNoLogout = () => {
        setAnchorEl(null);
    };
  return (
      <nav className="nav-menu">
        <Stack
            direction={{sm: 'column', xl: 'row'}}
            spacing={{sm: 1, md: 2, xl: 4}}
            justifyContent="flex-end"
            alignItems="center"
        >
          {user ? (<>
              <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
              >
              <h2>Cześć {user.displayName}</h2>                        </Button>
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
          </>): (<>
                <Link to={'/login'}>Zaloguj</Link>
                <Link to={'/register'}>Załóż konto</Link>
              </>)
          }

        </Stack>
        <div className="menu-list">
          <Stack
              direction={{sm: 'column', xl: 'row'}}
              spacing={{sm: 1, md: 2, xl: 4}}
              justifyContent="flex-end"
              alignItems="center"
          >
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
          </Stack>
        </div>
      </nav>
  );
}

Header.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func,
};
export default Header;