import { Box, Typography, Avatar } from '@mui/material';
import { useEffect } from 'react';
import AOS from 'aos';

const TeamMember = ({ name, role, bio, avatar }) => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <Box sx={{ 
      textAlign: 'center', 
      p: 4,
      backgroundColor: 'background.paper',
      borderRadius: 2,
      boxShadow: 3,
      height: '100%',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)'
      }
    }}>
      <Avatar 
        alt={name} 
        src={avatar}
        sx={{ 
          width: 180, 
          height: 180, 
          mx: 'auto', 
          mb: 3,
          border: '4px solid',
          borderColor: 'primary.main'
        }}
      />
      <Typography variant="h4" gutterBottom>{name}</Typography>
      <Typography variant="h5" color="primary" sx={{ mb: 2 }}>{role}</Typography>
      <Typography variant="body1">{bio}</Typography>
    </Box>
  );
};

export default TeamMember;