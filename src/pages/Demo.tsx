import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  Button,
  Paper,
  Stepper,
  Step,
  StepLabel,
  LinearProgress,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Psychology,
  Analytics,
  TrendingUp,
  CheckCircle,
  GitHub,
  BugReport,
  Storage,
  Dashboard,
  Assessment,
  Timeline,
  Groups,
  AccountBalance,
  DeviceHub as Integration,
  Chat as Slack
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`demo-tabpanel-${index}`}
      aria-labelledby={`demo-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Demo: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [demoStep, setDemoStep] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const demoSteps = [
    'Connect Your Tools',
    'Import & Analyze Data', 
    'AI Scoring & Insights',
    'Track & Optimize',
    'Scale & Grow'
  ];

  const integrations = [
    { name: 'Jira', icon: <BugReport />, status: 'Connected', projects: 23 },
    { name: 'GitHub', icon: <GitHub />, status: 'Connected', projects: 45 },
    { name: 'Slack', icon: <Slack />, status: 'Connected', projects: 12 },
    { name: 'Confluence', icon: <Storage />, status: 'Syncing', projects: 8 },
    { name: 'Trello', icon: <Dashboard />, status: 'Ready', projects: 0 }
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          🚀 Live InnovationFlow Demo
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Experience the power of enterprise-grade innovation management
        </Typography>
        
        {/* Demo Progress */}
        <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: 3 }}>
          <Stepper activeStep={demoStep} alternativeLabel>
            {demoSteps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  onClick={() => setDemoStep(index)}
                  sx={{ cursor: 'pointer' }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>
      </Box>

      {/* Demo Content Tabs */}
      <Paper elevation={3} sx={{ borderRadius: 3, overflow: 'hidden' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange} 
            variant="scrollable"
            scrollButtons="auto"
            sx={{ px: 2 }}
          >
            <Tab icon={<Integration />} label="Connect & Import" />
            <Tab icon={<Psychology />} label="AI Analysis & Scoring" />
            <Tab icon={<Analytics />} label="Track & Optimize" />
            <Tab icon={<TrendingUp />} label="Scale & Grow" />
          </Tabs>
        </Box>

        {/* Tab 1: Connect & Import */}
        <TabPanel value={activeTab} index={0}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Seamless Tool Integration
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                One-click integration with 50+ enterprise tools. Zero disruption to your existing workflows.
              </Typography>

              <List>
                <ListItem>
                  <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                  <ListItemText primary="50+ pre-built integrations" secondary="Jira, Slack, GitHub, Confluence, and more" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                  <ListItemText primary="Automated data import" secondary="Spreadsheets, databases, APIs" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                  <ListItemText primary="Real-time synchronization" secondary="Bi-directional sync with existing tools" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                  <ListItemText primary="Zero configuration" secondary="Enterprise SSO and security compliance" />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Connected Integrations
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {integrations.map((integration, index) => (
                  <motion.div
                    key={integration.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card elevation={2} sx={{ p: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ bgcolor: 'primary.main' }}>
                          {integration.icon}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="subtitle1" fontWeight="600">
                            {integration.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {integration.projects} projects synced
                          </Typography>
                        </Box>
                        <Chip 
                          label={integration.status}
                          color={integration.status === 'Connected' ? 'success' : 'warning'}
                          size="small"
                        />
                        {integration.status === 'Syncing' && (
                          <LinearProgress sx={{ width: 60, ml: 1 }} />
                        )}
                      </Box>
                    </Card>
                  </motion.div>
                ))}
              </Box>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Tab 2: AI Analysis & Scoring */}
        <TabPanel value={activeTab} index={1}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                AI-Powered Intelligence
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Machine learning models trained on 10M+ innovation projects provide 94% accurate predictions.
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={6} md={3}>
                  <Card elevation={2} sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                    <Typography variant="h4" fontWeight="bold" color="success.main">
                      94%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Success Probability
                    </Typography>
                    <Chip label="+8%" color="success" size="small" sx={{ mt: 1 }} />
                  </Card>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Card elevation={2} sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                    <Typography variant="h4" fontWeight="bold" color="info.main">
                      Low
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Risk Assessment
                    </Typography>
                    <Chip label="Improved" color="info" size="small" sx={{ mt: 1 }} />
                  </Card>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Card elevation={2} sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                    <Typography variant="h4" fontWeight="bold" color="warning.main">
                      $2.4M
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Market Opportunity
                    </Typography>
                    <Chip label="+15%" color="warning" size="small" sx={{ mt: 1 }} />
                  </Card>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Card elevation={2} sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                    <Typography variant="h4" fontWeight="bold" color="primary.main">
                      4.2M
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Time to Market (months)
                    </Typography>
                    <Chip label="-30%" color="primary" size="small" sx={{ mt: 1 }} />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Tab 3: Track & Optimize */}
        <TabPanel value={activeTab} index={2}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Real-Time Tracking & Optimization
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Monitor 40+ key metrics with automated optimization suggestions and performance benchmarking.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Card elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Live Dashboard Metrics
                </Typography>
                <Box sx={{ display: 'flex', gap: 4, mb: 3 }}>
                  <Box>
                    <Typography variant="h4" fontWeight="bold" color="primary.main">156</Typography>
                    <Typography variant="caption">Active Projects</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" fontWeight="bold" color="success.main">94%</Typography>
                    <Typography variant="caption">Success Rate</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" fontWeight="bold" color="warning.main">$12.4M</Typography>
                    <Typography variant="caption">Total ROI</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" fontWeight="bold" color="info.main">247</Typography>
                    <Typography variant="caption">Team Members</Typography>
                  </Box>
                </Box>

                <List>
                  <ListItem>
                    <ListItemIcon><Analytics color="primary" /></ListItemIcon>
                    <ListItemText 
                      primary="Real-time dashboards"
                      secondary="40+ KPIs with automated alerts and insights"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><Timeline color="primary" /></ListItemIcon>
                    <ListItemText 
                      primary="Progress tracking"
                      secondary="Milestone alerts and automated reporting"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><TrendingUp color="primary" /></ListItemIcon>
                    <ListItemText 
                      primary="Performance benchmarking"
                      secondary="Industry standards comparison"
                    />
                  </ListItem>
                </List>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Optimization Alerts
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ p: 2, border: 1, borderColor: 'warning.main', borderRadius: 2 }}>
                    <Typography variant="subtitle2" color="warning.main" fontWeight="600">
                      Resource Optimization
                    </Typography>
                    <Typography variant="body2">
                      3 projects can be optimized to save 15% budget
                    </Typography>
                  </Box>
                  <Box sx={{ p: 2, border: 1, borderColor: 'success.main', borderRadius: 2 }}>
                    <Typography variant="subtitle2" color="success.main" fontWeight="600">
                      Timeline Acceleration
                    </Typography>
                    <Typography variant="body2">
                      2 projects ahead of schedule - accelerate launch
                    </Typography>
                  </Box>
                  <Box sx={{ p: 2, border: 1, borderColor: 'error.main', borderRadius: 2 }}>
                    <Typography variant="subtitle2" color="error.main" fontWeight="600">
                      Risk Alert
                    </Typography>
                    <Typography variant="body2">
                      1 high-risk project needs immediate attention
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Tab 4: Scale & Grow */}
        <TabPanel value={activeTab} index={3}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Enterprise-Scale Innovation Management
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Portfolio-level insights, executive reporting, and continuous optimization for scaling innovation.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Executive Features
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon><AccountBalance color="primary" /></ListItemIcon>
                    <ListItemText 
                      primary="C-Suite Reporting"
                      secondary="Automated executive dashboards and insights"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><Assessment color="primary" /></ListItemIcon>
                    <ListItemText 
                      primary="ROI Tracking"
                      secondary="Portfolio-level return analysis"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><Groups color="primary" /></ListItemIcon>
                    <ListItemText 
                      primary="Strategic Planning"
                      secondary="Long-term innovation roadmaps"
                    />
                  </ListItem>
                </List>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Growth Metrics
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography>Innovation Velocity</Typography>
                    <Typography fontWeight="bold" color="success.main">+42%</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography>Time to Market</Typography>
                    <Typography fontWeight="bold" color="primary.main">-35%</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography>Portfolio ROI</Typography>
                    <Typography fontWeight="bold" color="warning.main">+280%</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography>Team Productivity</Typography>
                    <Typography fontWeight="bold" color="info.main">+67%</Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
      </Paper>

      {/* Call to Action */}
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Ready to Transform Your Innovation?
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Join 250+ enterprises accelerating innovation with InnovationFlow
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/signup')}
            sx={{
              px: 6,
              py: 2,
              borderRadius: 3,
              background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}
          >
            Start Free Trial
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/contact')}
            sx={{ px: 6, py: 2, borderRadius: 3 }}
          >
            Contact Sales
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Demo; 