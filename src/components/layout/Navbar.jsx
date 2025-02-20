
import * as React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '/assets/images/Nft-logo.png';

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
        sx={{ backgroundColor: '#FFF9F9', padding: '10px 0', boxShadow: 'none' }}
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
            <img src={Logo} alt="Fry Networks" />

            {/* Navigation Items */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              {navItems.map((item) => (
                <Typography
                  key={item}
                  sx={{
                    color: item === 'Home' ? 'red' : '#000',
                    fontWeight: 'bold',
                    margin: '0 15px',
                    cursor: 'pointer',
                    textDecoration: item === 'Home' ? 'underline' : 'none',
                    '&:hover': {
                      color: item === 'AI NFT Generation' ? 'red' : 'inherit',
                      textDecoration: item === 'AI NFT Generation' ? 'underline' : 'none',
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>

            {/* Buttons */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
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
