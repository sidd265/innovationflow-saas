import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  FormControlLabel,
  Checkbox,
  Divider,
  Link,
  Alert,
  Card,
  CardContent
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Google,
  Microsoft,
  GitHub,
  Science
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rememberMe' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (formData.email && formData.password) {
      // Simulate successful login
      navigate('/dashboard');
    } else {
      setError('Please enter valid credentials');
    }
    
    setLoading(false);
  };

  const handleSocialLogin = (provider: string) => {
    // Simulate social login
    navigate('/dashboard');
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Paper elevation={8} sx={{ p: 6, borderRadius: 4 }}>
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Science sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
            <Typography variant="h3" gutterBottom fontWeight="bold">
              Welcome Back
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Sign in to your InnovationFlow account
            </Typography>
          </Box>

          {/* Error Alert */}
          {error && (
            <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
              {error}
            </Alert>
          )}

          {/* Social Login Options */}
          <Box sx={{ mb: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<Google />}
                  onClick={() => handleSocialLogin('google')}
                  sx={{ py: 1.5, borderRadius: 3 }}
                >
                  Google
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<Microsoft />}
                  onClick={() => handleSocialLogin('microsoft')}
                  sx={{ py: 1.5, borderRadius: 3 }}
                >
                  Microsoft
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<GitHub />}
                  onClick={() => handleSocialLogin('github')}
                  sx={{ py: 1.5, borderRadius: 3 }}
                >
                  GitHub
                </Button>
              </Grid>
            </Grid>
            <Divider sx={{ my: 3 }}>or sign in with email</Divider>
          </Box>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="email"
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        color="primary"
                      />
                    }
                    label="Remember me"
                  />
                  <Link href="#" onClick={(e) => { e.preventDefault(); }} sx={{ textDecoration: 'none' }}>
                    Forgot password?
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={loading}
                  sx={{
                    py: 2,
                    borderRadius: 3,
                    background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    boxShadow: '0 4px 15px rgba(25, 118, 210, 0.3)',
                    '&:hover': {
                      transform: 'translateY(-1px)',
                      boxShadow: '0 6px 20px rgba(25, 118, 210, 0.4)'
                    }
                  }}
                >
                  {loading ? 'Signing In...' : 'Sign In'}
                </Button>
              </Grid>
            </Grid>
          </form>

          {/* Sign Up Link */}
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="body2" color="text.secondary">
              Don't have an account?{' '}
              <Link 
                component="button"
                variant="body2"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/signup');
                }}
                sx={{ 
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  color: 'primary.main'
                }}
              >
                Start your free trial
              </Link>
            </Typography>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default Login; 