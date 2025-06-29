import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ 
      backgroundColor: 'background.paper',
      py: 6,
      borderTop: '1px solid',
      borderColor: 'divider',
      width: '100%',
      mt: 'auto',
      position: 'relative',
      zIndex: 1,
    }}>
      <Box sx={{ 
        maxWidth: '1920px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h5" 
              component={Link}
              to="/"
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                mb: 2,
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: 'primary.main',
                }
              }}
            >
              АБС Studio
            </Typography>
            <Typography sx={{ mb: 2, maxWidth: '400px' }}>
              Мы создаем современные и инновационные веб-решения для вашего бизнеса
            </Typography>
          </Grid>
          
          <Grid item xs={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>Навигация</Typography>
            <Link href="/" color="inherit" underline="hover" display="block" mb={1} sx={{ transition: 'color 0.3s ease' }}>Главная</Link>
            <Link href="/projects" color="inherit" underline="hover" display="block" mb={1} sx={{ transition: 'color 0.3s ease' }}>Проекты</Link>
            <Link href="/about" color="inherit" underline="hover" display="block" mb={1} sx={{ transition: 'color 0.3s ease' }}>О нас</Link>
            <Link href="/contact" color="inherit" underline="hover" display="block" sx={{ transition: 'color 0.3s ease' }}>Контакты</Link>
          </Grid>
          
          <Grid item xs={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>Контакты</Typography>
            <Typography display="block" mb={1}>Email: contact@abs-studio.com</Typography>
            <Typography display="block">Адрес: г. Челябинск, ул. Ворошилова, 12</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer