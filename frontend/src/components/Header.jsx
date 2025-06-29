import { AppBar, Toolbar, Typography, Button, Switch, Box, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const Header = ({ darkMode, setDarkMode }) => {
  const theme = useTheme();
  const location = useLocation();

  const navLinks = [
    { title: 'Главная', path: '/' },
    { title: 'Проекты', path: '/projects' },
    { title: 'О нас', path: '/about' },
    { title: 'Контакты', path: '/contact' },
  ];

  return (
    <AppBar position="static" sx={{ 
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      boxShadow: 'none',
      borderBottom: `1px solid ${theme.palette.divider}`,
      transition: 'all 0.3s ease',
    }}>
      <Box sx={{
        maxWidth: '1920px',
        width: '100%',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        <Toolbar disableGutters>
          <Typography 
            variant="h5" 
            component={Link}
            to="/"
            sx={{ 
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '1px',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: theme.palette.primary.main,
              }
            }}
          >
            АБС Studio
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Button
                key={link.path}
                component={Link}
                to={link.path}
                sx={{
                  mx: 1,
                  color: location.pathname === link.path ? theme.palette.primary.main : 'inherit',
                  fontWeight: location.pathname === link.path ? 600 : 400,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  transition: 'color 0.3s ease',
                }}
              >
                {link.title}
              </Button>
            ))}
            
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 3 }}>
              <Switch 
                checked={darkMode} 
                onChange={() => setDarkMode(!darkMode)} 
                color="default"
              />
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;