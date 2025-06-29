import { useState } from 'react';
import { TextField, Button, Box, Typography, Alert, CircularProgress } from '@mui/material';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Имя обязательно';
    if (!formData.email.trim()) {
      newErrors.email = 'Email обязателен';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Некорректный email';
    }
    if (!formData.message.trim()) newErrors.message = 'Сообщение обязательно';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    try {
      const response = await axios.post('http://localhost:3000/contact', formData);
      if (response.status === 201) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      console.error('Ошибка отправки:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        Форма обратной связи
      </Typography>
      
      {status === 'success' && (
        <Alert severity="success" sx={{ mb: 3 }}>Сообщение отправлено! Мы свяжемся с вами в ближайшее время.</Alert>
      )}
      {status === 'error' && (
        <Alert severity="error" sx={{ mb: 3 }}>Произошла ошибка при отправке. Пожалуйста, попробуйте позже.</Alert>
      )}
      
      <TextField
        fullWidth
        margin="normal"
        label="Ваше имя"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        required
        size="medium"
      />
      <TextField
        fullWidth
        margin="normal"
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        required
        size="medium"
      />
      <TextField
        fullWidth
        margin="normal"
        label="Сообщение"
        name="message"
        multiline
        rows={5}
        value={formData.message}
        onChange={handleChange}
        error={!!errors.message}
        helperText={errors.message}
        required
        size="medium"
      />
      <Button 
        type="submit" 
        variant="contained" 
        size="large" 
        fullWidth
        sx={{ mt: 3, py: 1.5, fontSize: '1.1rem' }}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? <CircularProgress size={24} /> : 'Отправить сообщение'}
      </Button>
    </Box>
  );
};

export default ContactForm;