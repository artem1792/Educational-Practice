import { Box, Typography, Grid, Container } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import { useEffect } from 'react';
import AOS from 'aos';

const Projects = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Food",
      description: "Сервис заказа быстрой доставки еды из ресторанов и продуктов из магазинов через мобильные приложения или веб-сайт",
      imageUrl: "/images/projects/project1.jpg"
    },
    {
      id: 2,
      title: "bmark",
      description: "Сайт глобального лидера в сфере клиентского опыта с 1966 года, объединяющего людей и технологии для предоставления исключительных бизнес-решений, ориентированных на удовлетворенность клиентов и сотрудников в 30 странах",
      imageUrl: "/images/projects/project2.jpg"
    },
    {
      id: 3,
      title: "RGym",
      description: "Онлайн-портал фитнес-клуба: бронируйте зал и выбирайте тренировки из каталога",
      imageUrl: "/images/projects/project3.jpg"
    }
  ];

  return (
    <Container 
      maxWidth="xl" 
      sx={{ 
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexGrow: 1,
        minHeight: 0,
      }}
    >
      <Box 
        textAlign="center" 
        mb={4}
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Наши проекты
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Посмотрите наши последние работы
        </Typography>
      </Box>
      
      <Grid 
        container 
        spacing={4} 
        justifyContent="center"
        sx={{ 
          width: '100%',
          flexGrow: 1,
          pb: 4,
        }}
      >
        {projects.map((project, index) => (
          <Grid 
            item 
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={150 + index * 100}
          >
            <ProjectCard 
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;