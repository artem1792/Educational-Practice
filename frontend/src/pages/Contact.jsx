import { Box, Typography, Grid } from '@mui/material';
import ContactForm from '../components/ContactForm';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Box sx={{ 
      flexGrow: 1,
      py: 10,
      px: { xs: 2, md: 4 },
    }}>
      <Box sx={{ 
        maxWidth: '1600px', 
        mx: 'auto', 
        textAlign: 'center',
        mb: 8 
      }}>
        <Typography variant="h2" component="h1" gutterBottom data-aos="fade-down">
          Контакты
        </Typography>
        <Typography variant="h5" data-aos="fade-up">
          Свяжитесь с нами для обсуждения вашего проекта
        </Typography>
      </Box>
      
      <Grid container spacing={8} sx={{ maxWidth: '1600px', mx: 'auto' }}>
        <Grid item xs={12} md={6} data-aos="fade-right">
          <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>Наши контакты</Typography>
          
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>Адрес</Typography>
            <Typography variant="h6">г. Челябинск, ул. Ворошилова, 12</Typography>
          </Box>
          
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>Email</Typography>
            <Typography variant="h6">contact@abs-studio.com</Typography>
          </Box>

        </Grid>
        
        <Grid item xs={12} md={6} data-aos="fade-left">
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;