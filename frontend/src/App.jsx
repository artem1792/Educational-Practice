import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import { Box, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
    
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: { main: '#949494' },
      secondary: { main: '#2a2a2a' },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
      h1: { fontSize: '2.5rem', fontWeight: 700 },
      h2: { fontSize: '2rem', fontWeight: 600 },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh',
          backgroundColor: theme.palette.background.default,
        }}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          
          <Box component="main" sx={{ 
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
          }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
          
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;