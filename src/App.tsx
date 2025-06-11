import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Demo from './pages/Demo';
import Contact from './pages/Contact';
import { Science } from '@mui/icons-material';

function App() {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #fafafa 0%, #ffffff 100%)'
    }}>
      {/* Navigation */}
      <AppBar 
        position="static" 
        elevation={0}
        sx={{ 
          bgcolor: 'rgba(255,255,255,0.95)', 
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          color: 'text.primary'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ px: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <Science sx={{ color: 'primary.main', mr: 1, fontSize: 32 }} />
              <Typography
                variant="h5"
                component="div"
                sx={{ 
                  fontWeight: 'bold', 
                  color: 'primary.main',
                  cursor: 'pointer'
                }}
                onClick={() => navigate('/')}
              >
                InnovationFlow
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Button 
                color="inherit" 
                onClick={() => navigate('/')}
                sx={{ 
                  fontWeight: 600,
                  textTransform: 'none',
                  color: 'text.primary',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                Home
              </Button>
              <Button 
                color="inherit" 
                onClick={() => navigate('/how-it-works')}
                sx={{ 
                  fontWeight: 600,
                  textTransform: 'none',
                  color: 'text.primary',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                How It Works
              </Button>
              <Button 
                color="inherit"
                onClick={() => navigate('/pricing')}
                sx={{ 
                  fontWeight: 600,
                  textTransform: 'none',
                  color: 'text.primary',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                Pricing
              </Button>
              <Button 
                color="inherit"
                onClick={() => navigate('/contact')}
                sx={{ 
                  fontWeight: 600,
                  textTransform: 'none',
                  color: 'text.primary',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                Contact
              </Button>
              <Button 
                variant="outlined" 
                onClick={() => navigate('/login')}
                sx={{ 
                  ml: 2,
                  borderRadius: 25,
                  textTransform: 'none',
                  fontWeight: 600,
                  px: 3,
                  borderWidth: 2,
                  '&:hover': { borderWidth: 2 }
                }}
              >
                Sign In
              </Button>
              <Button 
                variant="contained" 
                onClick={() => navigate('/signup')}
                sx={{ 
                  borderRadius: 25,
                  background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                  textTransform: 'none',
                  fontWeight: 600,
                  px: 3,
                  boxShadow: '0 4px 15px rgba(25, 118, 210, 0.3)',
                  '&:hover': {
                    transform: 'translateY(-1px)',
                    boxShadow: '0 6px 20px rgba(25, 118, 210, 0.4)'
                  }
                }}
              >
                Start Free Trial
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Box>

      {/* Footer */}
      <Box 
        component="footer" 
        sx={{ 
          bgcolor: 'grey.900', 
          color: 'white', 
          py: 6,
          mt: 'auto'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Science sx={{ color: 'primary.main', mr: 1, fontSize: 32 }} />
              <Typography variant="h6" fontWeight="bold">
                InnovationFlow
              </Typography>
            </Box>
            
            <Typography variant="body2" color="grey.300" sx={{ textAlign: { xs: 'center', md: 'right' } }}>
              © 2024 InnovationFlow. All rights reserved. | 
              Accelerating innovation since 2020.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
