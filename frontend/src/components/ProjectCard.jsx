import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { useEffect } from 'react';
import AOS from 'aos';

const ProjectCard = ({ title, description, imageUrl }) => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <Card sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      backgroundColor: 'background.paper',
      boxShadow: 2,
      borderRadius: 2,
      overflow: 'hidden',
      maxWidth: 345,
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'translateY(-10px)'
      }
    }}>
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={title}
        sx={{ 
          objectFit: 'cover',
          width: '100%',
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;