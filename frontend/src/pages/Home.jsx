import { Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{
        height: '100vh',
        minHeight: '800px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), url(/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '0 2rem',
      }} data-aos="fade-down">
        <Box sx={{ maxWidth: '1200px' }}>
          <Typography variant="h1" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
            Креативные цифровые решения
          </Typography>
          <Typography variant="h4" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
            Веб-разработка для вашего бизнеса
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            component={Link} 
            to="/projects"
            sx={{ px: 6, py: 1.5, fontSize: '1.1rem' }}
          >
            Наши работы
          </Button>
        </Box>
      </Box>

      {/* О студии */}
      <Box sx={{ py: 10, px: { xs: 2, md: 4 } }} data-aos="fade-up">
        <Box sx={{ 
          maxWidth: '1600px', 
          mx: 'auto', 
          textAlign: 'center',
          mb: 8 
        }}>
          <Typography variant="h2" component="h2" gutterBottom>
            О нашей студии
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: '900px', mx: 'auto' }}>
            Мы - молодая и динамично развивающаяся веб-студия, специализирующаяся на создании 
            современных и функциональных веб-сайтов.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;