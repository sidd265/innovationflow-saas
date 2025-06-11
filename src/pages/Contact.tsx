import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  Button,
  TextField,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Alert,
  Snackbar
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Email,
  Phone,
  LocationOn,
  Schedule
} from '@mui/icons-material';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSnackbar({ 
      open: true, 
      message: 'Thank you! Our enterprise team will contact you within 24 hours.' 
    });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      message: ''
    });
  };

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Contact Our Enterprise Team
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Ready to transform your innovation pipeline? Let's discuss how InnovationFlow can accelerate your R&D success.
        </Typography>
      </Box>

      <Grid container spacing={6}>
        <Grid item xs={12} lg={8}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card elevation={3} sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Get Started Today
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Fill out the form and our enterprise team will contact you within 24 hours.
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="firstName"
                      label="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="lastName"
                      label="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="email"
                      label="Work Email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="company"
                      label="Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="message"
                      label="Tell us about your innovation challenges"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your current innovation process, team size, and specific goals..."
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        py: 2,
                        borderRadius: 3,
                        background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        textTransform: 'none'
                      }}
                    >
                      Contact Enterprise Team
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </motion.div>
        </Grid>

        <Grid item xs={12} lg={4}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card elevation={3} sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Contact Information
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon><Email color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="Enterprise Sales" 
                    secondary="enterprise@innovationflow.com" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><Phone color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="24/7 Support" 
                    secondary="+1 (555) 123-FLOW" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><LocationOn color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="Headquarters" 
                    secondary="San Francisco, CA" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><Schedule color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="Response Time" 
                    secondary="<4 hours average" 
                  />
                </ListItem>
              </List>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setSnackbar({ ...snackbar, open: false })} 
          severity="success"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact; 