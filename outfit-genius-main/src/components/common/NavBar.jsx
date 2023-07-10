import { useState } from 'react';
import { styled } from '@mui/system';
import { AppBar, Toolbar, IconButton, Typography, Button, Box,Menu, MenuItem } from '@mui/material';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/logo.png';
import { isLoggedIn } from '../../utils/isLoggedIn';

import {useNavigate } from 'react-router-dom';

const StyledAppBar = styled(AppBar)({
  background: '#032c2a',
  color: '#ffffff',
  boxShadow: 'none',
  '& .MuiToolbar-root': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0',
    '& .MuiTypography-root': {
      display: 'flex',
      alignItems: 'center',
      '& img': {
        height: '30px',
        marginRight: '10px',
      },
    },
    '& .MuiButton-root': {
      color: '#ffffff',
    },
  },
  '& .MuiIconButton-root': {
    padding: '8px',
  },
  '& .MuiMenu-paper': {
    borderRadius: '0',
    boxShadow: 'none',
    marginTop: '10px',
    '& .MuiList-root': {
      '& .MuiListItem-root': {
        justifyContent: 'center',
        padding: '10px 0',
      },
    },
  },
});

const StyledMenuIcon = styled(MenuIcon)({
  color: '#333333',
});

const StyledSearchIcon = styled(SearchIcon)({
  color: '#ffffff',
});

const NavLinks = styled('div')({
  display: 'flex',
  alignItems: 'center',
  '& .MuiButton-root': {
    marginLeft: '20px',
  },
  '@media (max-width: 1024px)': {
    display: 'none',
  },
});

const HamburgerMenu = styled('div')({
  display: 'none',
  '@media (max-width: 1024px)': {
    display: 'block',
  },
});
const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  }

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (path) => {
    setAnchorEl(null);
    navigate(path);
  };


  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Box sx={{marginLeft:'.5rem'}}>
        <Typography variant="h6" component={Link} href='/' sx={{
          color: 'white',
          textDecoration: 'none',
        }}>
          <img src={logo}/>
          <Typography>Outfit Genius</Typography>
        </Typography>
        </Box>
        <NavLinks>
          {
          !isLoggedIn () && 
          <Button variant="text" onClick={()=>handleNavigate('/auth')} sx={{color:'white'}}>Login</Button>
          }
          <Button variant="text" onClick={()=>handleNavigate('/search')}>Search</Button>
          <Button variant="text" onClick={()=>handleNavigate('/recommend')}>Recommend</Button>
          <Button variant="text" onClick={()=>handleNavigate('/about')}>About</Button>
          <Button variant="text" onClick={()=>handleNavigate('/contact')}>Contact</Button>
          {
          isLoggedIn () && <Button variant="text" onClick={()=>handleNavigate('/logout')} sx={{color:'white'}}>Logout</Button>
          }
        </NavLinks>
        <HamburgerMenu>
          <IconButton onClick={handleMenuOpen}>
            <StyledMenuIcon />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {
          !isLoggedIn () &&
          <MenuItem onClick={()=>handleMenuClose('/auth')} component={Link} href='/auth'>Login</MenuItem>
            }
            <MenuItem onClick={()=>handleMenuClose('/search')} component = {Link} >Search</MenuItem>
            <MenuItem onClick={()=>handleMenuClose('/recommend')} component = {Link} >Recommend</MenuItem>
            <MenuItem onClick={()=>handleMenuClose('/about')} component={Link} >About</MenuItem>
            <MenuItem onClick={()=>handleMenuClose('/contact')} component={Link} >Contact</MenuItem>
            {
              isLoggedIn () &&
              <MenuItem onClick={()=>handleMenuClose('/logout')} component={Link}>Logout</MenuItem>
            }
          </Menu>
        </HamburgerMenu>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;
