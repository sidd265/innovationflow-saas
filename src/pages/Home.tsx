import React from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  Chip,
  Stack,
  Paper
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  PlayArrow,
  TrendingUp,
  Security,
  Speed,
  Analytics,
  ArrowForward,
  Rocket,
  Science
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleStartTrial = () => {
    navigate('/signup');
  };

  const handleWatchDemo = () => {
    // Professional demo page
    navigate('/demo');
  };

  const handleGetStarted = () => {
    navigate('/signup');
  };

  const handleScheduleDemo = () => {
    // In a real app, this would open a calendar booking system
    window.open('https://calendly.com', '_blank');
  };

  const features = [
    {
      icon: <Science sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'AI-Powered Innovation',
      description: 'Leverage machine learning to identify breakthrough opportunities and predict project success rates with 94% accuracy.'
    },
    {
      icon: <Analytics sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Advanced Analytics',
      description: 'Real-time dashboards with predictive insights, comprehensive ROI tracking, and automated reporting for all projects.'
    },
    {
      icon: <Security sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 compliance, end-to-end encryption, IP protection, and audit trails.'
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Rapid Deployment',
      description: 'Get started in minutes with automated setup, seamless integrations, and pre-built templates for faster onboarding.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechCorp',
      avatar: 'SC',
      rating: 5,
      text: 'Reduced our time-to-market by 40% and increased innovation success rate by 65%. The AI insights are game-changing.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP Innovation, GlobalTech',
      avatar: 'MR',
      rating: 5,
      text: 'The best innovation management platform we\'ve used. ROI was evident within 3 months. Highly recommended.'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director, BioInnovate',
      avatar: 'EW',
      rating: 5,
      text: 'Streamlined our R&D pipeline and improved collaboration across global teams. Exceptional platform and support.'
    }
  ];

  const stats = [
    { value: '250+', label: 'Enterprise Clients' },
    { value: '50M+', label: 'Projects Managed' },
    { value: '98%', label: 'Success Rate' },
    { value: '24/7', label: 'Support' }
  ];

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ 
            textAlign: 'center', 
            mb: 8, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            maxWidth: '1000px',
            mx: 'auto'
          }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Chip
                label="🚀 New: AI-Powered Project Scoring"
                color="primary"
                variant="outlined"
                sx={{ 
                  mb: 4, 
                  fontSize: '14px', 
                  px: 3, 
                  py: 1,
                  fontWeight: 600,
                  borderRadius: 50
                }}
              />
            </motion.div>
            
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 3,
                textAlign: 'center',
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                lineHeight: 1.1
              }}
            >
              Transform Your Innovation Pipeline
            </Typography>
            
            <Typography
              variant="h4"
              color="text.secondary"
              sx={{ 
                mb: 6, 
                maxWidth: '800px', 
                lineHeight: 1.5,
                textAlign: 'center',
                fontWeight: 400,
                fontSize: { xs: '1.2rem', md: '1.5rem' }
              }}
            >
              The world's most advanced innovation management platform. 
              Accelerate breakthrough discoveries, optimize R&D investments, 
              and bring game-changing products to market 3x faster.
            </Typography>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={3} 
                sx={{ mb: 6, alignItems: 'center', justifyContent: 'center' }}
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  onClick={handleStartTrial}
                  sx={{
                    px: 6,
                    py: 2,
                    borderRadius: 50,
                    background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    boxShadow: '0 8px 32px rgba(25, 118, 210, 0.3)',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 40px rgba(25, 118, 210, 0.4)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PlayArrow />}
                  onClick={handleWatchDemo}
                  sx={{ 
                    px: 6, 
                    py: 2, 
                    borderRadius: 50,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  Watch Demo
                </Button>
              </Stack>
            </motion.div>

            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', fontWeight: 500 }}>
              Free 14-day trial • No credit card required • Setup in 5 minutes
            </Typography>
          </Box>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Paper 
            elevation={8} 
            sx={{ 
              p: 6, 
              borderRadius: 6, 
              mb: 12,
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
              border: '1px solid rgba(25, 118, 210, 0.1)'
            }}
          >
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography 
                        variant="h2" 
                        color="primary" 
                        fontWeight="bold"
                        sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography variant="h6" color="text.secondary" fontWeight="600">
                        {stat.label}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </motion.div>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 12 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography variant="h2" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
                Powerful Features for Innovation Leaders
              </Typography>
              <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
                Everything you need to manage, track, and accelerate your innovation pipeline with enterprise-grade tools
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -8 }}
                  >
                    <Card
                      elevation={4}
                      sx={{
                        height: '100%',
                        p: 4,
                        borderRadius: 4,
                        border: '1px solid',
                        borderColor: 'grey.200',
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                        '&:hover': {
                          borderColor: 'primary.main',
                          boxShadow: '0 16px 40px rgba(25, 118, 210, 0.15)',
                          transform: 'translateY(-8px)'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <CardContent sx={{ p: 0 }}>
                        <Box mb={3}>{feature.icon}</Box>
                        <Typography variant="h4" gutterBottom fontWeight="700" sx={{ mb: 2 }}>
                          {feature.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" lineHeight={1.7} fontSize="1.1rem">
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
              Trusted by Innovation Leaders
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Join thousands of companies accelerating their innovation journey
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card
                    elevation={6}
                    sx={{
                      p: 4,
                      height: '100%',
                      borderRadius: 4,
                      background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                      border: '1px solid rgba(25, 118, 210, 0.1)',
                      '&:hover': {
                        boxShadow: '0 16px 40px rgba(0,0,0,0.1)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <CardContent sx={{ p: 0 }}>
                      <Rating value={testimonial.rating} readOnly sx={{ mb: 3 }} size="large" />
                      <Typography variant="h6" sx={{ mb: 3, fontStyle: 'italic', lineHeight: 1.6 }}>
                        "{testimonial.text}"
                      </Typography>
                      <Box display="flex" alignItems="center">
                        <Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 56, height: 56, fontSize: '1.5rem' }}>
                          {testimonial.avatar}
                        </Avatar>
                        <Box>
                          <Typography variant="h6" fontWeight="700">
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            {testimonial.role}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* CTA Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)', 
        color: 'white', 
        py: 12,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Rocket sx={{ fontSize: 80, mb: 3 }} />
              </motion.div>
              <Typography variant="h2" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
                Ready to Transform Your Innovation?
              </Typography>
              <Typography variant="h5" sx={{ mb: 6, opacity: 0.95, maxWidth: '600px', mx: 'auto' }}>
                Join leading companies and accelerate your path to breakthrough innovations. Start your free trial today.
              </Typography>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={3} 
                sx={{ justifyContent: 'center', alignItems: 'center' }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleGetStarted}
                  sx={{
                    bgcolor: 'white',
                    color: 'primary.main',
                    px: 6,
                    py: 2,
                    borderRadius: 50,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: 'grey.100',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.2)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleScheduleDemo}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    px: 6,
                    py: 2,
                    borderRadius: 50,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    borderWidth: 2,
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)',
                      borderWidth: 2,
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  Schedule Demo
                </Button>
              </Stack>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 