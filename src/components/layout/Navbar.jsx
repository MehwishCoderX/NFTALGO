import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Logo from '/assets/images/Nft-logo.png';
// import Button from '../shared/Button'

const navItems = ['Home', 'AI NFT Generation'];

const ConnectButton = styled(Button)({
  background: 'linear-gradient(45deg, #ff0000 30%, #ff4444 90%)',
  color: '#fff',
  fontWeight: 'bold',
  borderRadius: '8px',
  padding: '8px 16px',
  textTransform: 'none',
  width: '200px',
});

const CreateButton = styled(Button)({
  border: '2px solid red',
  color: 'red',
  fontWeight: 'bold',
  borderRadius: '8px',
  padding: '8px 16px',
  textTransform: 'none',
  width: '200px',
});

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Fry Networks
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: 2 }}>
        <ConnectButton>Connect Wallet</ConnectButton>
        <CreateButton sx={{ mt: 1 }}>Create NFT</CreateButton>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: ' #FFF9F9', padding: '10px 0', boxShadow: 'none' }}
      >
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'space-between', sm: 'space-around' },
              width: '100%',
            }}
          >
            {/* Logo */}
            <img src={Logo} alt="Fry Networks"  />

            {/* Navigation Items (Hidden on small screens) */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              {navItems.map((item) => (
                <Typography
                  key={item}
                  sx={{
                    color: item === 'Home' ? 'red' : '#000',
                    fontWeight: 'bold',
                    margin: '0 15px',
                    cursor: 'pointer',
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>

            {/* Buttons (Hidden on extra-small screens) */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
              {/* <Button text=" connect wallet" className={'nav-'}></Button> */}
              <ConnectButton>Connect Wallet</ConnectButton>
              <CreateButton>Create NFT</CreateButton>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: 'block', sm: 'none' }, color: 'black' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
