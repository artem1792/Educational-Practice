import { Box, Typography, Grid, Button } from '@mui/material';
import TeamMember from '../components/TeamMember';
import { useEffect } from 'react';
import AOS from 'aos';

const teamMembers = [
  {
    id: 1,
    name: "Бобровский Артём",
    role: "Frontend-разработчик",
    bio: "React, React Router, MUI/Ant Design",
    avatar: "/images/team/avatar1.jpg"
  },
  {
    id: 2,
    name: "Галлямов Максим",
    role: "Backend-разработчик",
    bio: "Node.js, Express, MongoDB, Mongoose",
    avatar: "/images/team/avatar2.jpg"
  },
  {
    id: 3,
    name: "Апальков Богдан",
    role: "Аналитик данных",
    bio: "Python, Plotly, Google Colab",
    avatar: "/images/team/avatar3.jpg"
  }
];

const About = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <Box sx={{ 
      flexGrow: 1,
      py: 10,
      px: { xs: 2, md: 4 },
    }}>
      <Box 
        sx={{ 
          maxWidth: '1600px', 
          mx: 'auto', 
          textAlign: 'center',
          mb: 8 
        }}
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <Typography variant="h2" component="h1" gutterBottom>
          О студии АБС
        </Typography>
        <Typography variant="h5" sx={{ maxWidth: '900px', mx: 'auto' }}>
          Мы - команда профессионалов, объединенных любовью к созданию качественных цифровых продуктов.
        </Typography>
      </Box>

      <Box 
        sx={{ maxWidth: '1200px', mx: 'auto', mb: 10 }}
        data-aos="fade-right"
        data-aos-delay="150"
      >
        <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
          Наша история
        </Typography>
        <Typography variant="h6" sx={{textAlign: 'center'}}>
          АБС Studio была основана в 2025 году тремя студентами международного института дизайна и сервиса.
          <br />
          Начав с учебных проектов, мы постепенно выросли в полноценную студию.
        </Typography>
      </Box>

      <Box 
        sx={{ maxWidth: '1600px', mx: 'auto' }}
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom 
          sx={{ mb: 6, textAlign: 'center' }}
        >
          Наша команда
        </Typography>
        
        <Grid container spacing={6} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid 
              item 
              xs={12} 
              md={6} 
              lg={4} 
              key={member.id}
              data-aos="zoom-in"
              data-aos-delay={250 + index * 100}
            >
              <TeamMember 
                name={member.name}
                role={member.role}
                bio={member.bio}
                avatar={member.avatar}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      
      <Box 
        sx={{ 
          maxWidth: '1796px', 
          mx: 'auto',
          my: 10,
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: 3,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: 6
          }
        }}
        data-aos="fade-up"
        data-aos-delay="250"
      >
        <img 
          src="/images/rating/newplot.png"
          alt="Наши проекты"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            objectFit: 'cover'
          }}
        />
      </Box>

      <Box 
        sx={{ 
          maxWidth: '1200px', 
          mx: 'auto', 
          mt: 10,
          p: 6,
          bgcolor: 'primary.main',
          color: 'white',
          borderRadius: 2,
          textAlign: 'center',
        }}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 3 }}>
          Готовы начать проект?
        </Typography>
        <Button 
          variant="contained" 
          size="large" 
          href="/contact"
          sx={{ 
            px: 6, 
            py: 1.5, 
            fontSize: '1.1rem',
            backgroundColor: 'white',
            color: 'primary.main',
            '&:hover': {
              backgroundColor: '#f5f5f5',
            }
          }}
        >
          Связаться с нами
        </Button>
      </Box>
    </Box>
  );
};

export default About;