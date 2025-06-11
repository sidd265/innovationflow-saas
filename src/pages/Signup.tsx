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
  Alert,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Step,
  Stepper,
  StepLabel
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Security,
  Speed,
  Analytics,
  Google,
  Microsoft,
  GitHub
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    companySize: '',
    password: '',
    agreeToTerms: false
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'agreeToTerms' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoading(false);
    setSuccess(true);
    
    // Redirect to dashboard after success
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  const benefits = [
    'Full access to all premium features',
    'Unlimited projects and team members',
    'Advanced AI analytics and insights',
    'Priority customer support',
    'Enterprise-grade security'
  ];

  if (success) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Card elevation={8} sx={{ textAlign: 'center', p: 6, borderRadius: 4 }}>
            <CheckCircle color="success" sx={{ fontSize: 80, mb: 3 }} />
            <Typography variant="h3" gutterBottom fontWeight="bold" color="success.main">
              Welcome Aboard!
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Your account has been created successfully. Redirecting to your dashboard...
            </Typography>
            <Stepper activeStep={2} sx={{ mt: 4 }}>
              <Step completed>
                <StepLabel>Sign Up</StepLabel>
              </Step>
              <Step completed>
                <StepLabel>Verify Email</StepLabel>
              </Step>
              <Step active>
                <StepLabel>Welcome</StepLabel>
              </Step>
            </Stepper>
          </Card>
        </motion.div>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4} alignItems="stretch">
        {/* Left side - Form */}
        <Grid item xs={12} lg={7}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Paper elevation={8} sx={{ p: 6, borderRadius: 4, height: '100%' }}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h3" gutterBottom fontWeight="bold">
                  Start Your Free Trial
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Join 250+ companies transforming their innovation pipeline
                </Typography>
              </Box>

              {/* Social Login Options */}
              <Box sx={{ mb: 4 }}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<Google />}
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
                      sx={{ py: 1.5, borderRadius: 3 }}
                    >
                      GitHub
                    </Button>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 3 }}>or sign up with email</Divider>
              </Box>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      name="firstName"
                      label="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      name="lastName"
                      label="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="email"
                      label="Work Email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      name="company"
                      label="Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      name="jobTitle"
                      label="Job Title"
                      value={formData.jobTitle}
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
                      helperText="Must be at least 8 characters with uppercase, lowercase, and numbers"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleInputChange}
                          required
                        />
                      }
                      label={
                        <Typography variant="body2">
                          I agree to the Terms of Service and Privacy Policy
                        </Typography>
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      size="large"
                      loading={loading}
                      disabled={!formData.agreeToTerms}
                      sx={{
                        py: 2,
                        borderRadius: 3,
                        background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 25px rgba(25, 118, 210, 0.3)'
                        }
                      }}
                    >
                      {loading ? 'Creating Account...' : 'Start Free Trial'}
                    </Button>
                  </Grid>
                </Grid>
              </form>

              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                  Already have an account?{' '}
                  <Button color="primary" onClick={() => navigate('/login')}>
                    Sign In
                  </Button>
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        </Grid>

        {/* Right side - Benefits */}
        <Grid item xs={12} lg={5}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card 
              elevation={4} 
              sx={{ 
                p: 4, 
                borderRadius: 4, 
                height: '100%',
                background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                color: 'white'
              }}
            >
              <CardContent>
                <Typography variant="h4" gutterBottom fontWeight="bold">
                  What's Included
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
                  Your 14-day free trial includes:
                </Typography>
                
                <List>
                  {benefits.map((benefit, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: 'white' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={benefit}
                        primaryTypographyProps={{ color: 'white' }}
                      />
                    </ListItem>
                  ))}
                </List>

                <Box sx={{ mt: 4, p: 3, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    🎉 Special Launch Offer
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Sign up now and get 50% off your first year when you upgrade to Pro
                  </Typography>
                </Box>

                <Alert 
                  severity="info" 
                  sx={{ 
                    mt: 3, 
                    bgcolor: 'rgba(255,255,255,0.9)', 
                    color: 'text.primary',
                    '& .MuiAlert-icon': { color: 'primary.main' }
                  }}
                >
                  No credit card required. Cancel anytime.
                </Alert>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signup; 