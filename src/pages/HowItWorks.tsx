import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Card,
  CardContent,
  Avatar,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Stack
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  ExpandMore,
  CheckCircle,
  TrendingUp,
  Analytics,
  Science,
  Group,
  Timeline,
  Security,
  Speed,
  AutoGraph,
  Lightbulb,
  Assignment,
  Dashboard,
  NotificationsActive,
  CloudUpload,
  IntegrationInstructions
} from '@mui/icons-material';

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
      id={`feature-tabpanel-${index}`}
      aria-labelledby={`feature-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const steps = [
    {
      title: 'Connect & Import',
      description: 'Seamlessly integrate with your existing tools and import project data',
      icon: <CloudUpload sx={{ color: 'primary.main', fontSize: 40 }} />,
      details: [
        'One-click integration with 50+ tools including Jira, Slack, GitHub',
        'Automated data import from spreadsheets and databases',
        'Real-time synchronization with existing workflows',
        'Zero disruption to current processes'
      ]
    },
    {
      title: 'AI Analysis & Scoring',
      description: 'Our AI analyzes your projects and provides intelligent scoring',
      icon: <Science sx={{ color: 'primary.main', fontSize: 40 }} />,
      details: [
        'Machine learning models trained on 10M+ innovation projects',
        'Predictive success scoring with 94% accuracy',
        'Risk assessment and mitigation recommendations',
        'Market opportunity analysis and competitive insights'
      ]
    },
    {
      title: 'Track & Optimize',
      description: 'Monitor progress and optimize your innovation pipeline',
      icon: <Analytics sx={{ color: 'primary.main', fontSize: 40 }} />,
      details: [
        'Real-time dashboards with 40+ key metrics',
        'Automated progress tracking and milestone alerts',
        'Resource allocation optimization suggestions',
        'Performance benchmarking against industry standards'
      ]
    },
    {
      title: 'Scale & Grow',
      description: 'Scale your innovation efforts and accelerate growth',
      icon: <TrendingUp sx={{ color: 'primary.main', fontSize: 40 }} />,
      details: [
        'Portfolio-level insights and strategic recommendations',
        'Automated reporting for executives and stakeholders',
        'Innovation ROI tracking and improvement suggestions',
        'Continuous learning and model optimization'
      ]
    }
  ];

  const features = [
    {
      title: 'Project Management',
      icon: <Assignment sx={{ fontSize: 30 }} />,
      content: (
        <Box>
          <Typography variant="h6" gutterBottom>Advanced Project Orchestration</Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Manage complex innovation projects with our intelligent project management system.
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
              <ListItemText primary="Gantt charts with dependency mapping" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
              <ListItemText primary="Resource allocation and capacity planning" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
              <ListItemText primary="Automated milestone tracking" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
              <ListItemText primary="Risk management and mitigation" />
            </ListItem>
          </List>
        </Box>
      )
    },
    {
      title: 'Analytics & Insights',
      icon: <AutoGraph sx={{ fontSize: 30 }} />,
      content: (
        <Box>
          <Typography variant="h6" gutterBottom>Predictive Analytics Engine</Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Leverage AI-powered analytics to make data-driven innovation decisions.
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
              <ListItemText primary="Predictive success modeling" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
              <ListItemText primary="Market trend analysis" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
              <ListItemText primary="ROI optimization recommendations" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
              <ListItemText primary="Competitive intelligence" />
            </ListItem>
          </List>
        </Box>
      )
    },
    {
      title: 'Collaboration Hub',
      icon: <Group sx={{ fontSize: 30 }} />,
      content: (
        <Box>
          <Typography variant="h6" gutterBottom>Global Team Collaboration</Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Connect teams across the globe with our advanced collaboration platform.
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
              <ListItemText primary="Real-time collaboration spaces" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
              <ListItemText primary="Expert network matching" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
              <ListItemText primary="Knowledge sharing platforms" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
              <ListItemText primary="Cross-functional team formation" />
            </ListItem>
          </List>
        </Box>
      )
    }
  ];

  const benefits = [
    {
      title: 'Accelerate Time-to-Market',
      description: 'Reduce development cycles by 40% with intelligent project prioritization',
      icon: <Speed sx={{ fontSize: 40, color: 'primary.main' }} />,
      metric: '40% Faster'
    },
    {
      title: 'Increase Success Rate',
      description: 'Boost innovation success rates by 65% with AI-powered insights',
      icon: <TrendingUp sx={{ fontSize: 40, color: 'success.main' }} />,
      metric: '65% Higher'
    },
    {
      title: 'Optimize Resources',
      description: 'Improve resource utilization by 50% with smart allocation algorithms',
      icon: <Analytics sx={{ fontSize: 40, color: 'warning.main' }} />,
      metric: '50% Better'
    },
    {
      title: 'Scale Innovation',
      description: 'Handle 10x more projects with the same team size',
      icon: <Lightbulb sx={{ fontSize: 40, color: 'info.main' }} />,
      metric: '10x Scale'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can we see results?',
      answer: 'Most clients see measurable improvements within 30 days of implementation. Our AI models begin providing insights immediately, with accuracy improving over the first 90 days as they learn your specific innovation patterns.'
    },
    {
      question: 'What integrations do you support?',
      answer: 'We integrate with 50+ popular tools including Jira, Slack, Microsoft Teams, GitHub, Salesforce, and more. Our API-first approach allows for custom integrations with proprietary systems.'
    },
    {
      question: 'How secure is our data?',
      answer: 'We maintain SOC 2 Type II compliance, use end-to-end encryption, and offer on-premise deployment options. Your intellectual property is protected with bank-grade security measures.'
    },
    {
      question: 'Can it scale with our organization?',
      answer: 'Absolutely. Our platform scales from small teams to global enterprises with thousands of users. We support unlimited projects and provide dedicated infrastructure for large organizations.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 support, dedicated customer success managers, comprehensive onboarding, and ongoing training. Premium plans include white-glove implementation and custom training programs.'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              How It Works
            </Typography>
            <Typography variant="h5" color="text.secondary" maxWidth="800px" mx="auto">
              Discover how our AI-powered platform transforms your innovation pipeline 
              from concept to commercialization
            </Typography>
          </Box>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Stepper orientation="vertical" sx={{ mb: 8 }}>
            {steps.map((step, index) => (
              <Step key={index} active={true}>
                <StepLabel
                  StepIconComponent={() => (
                    <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
                      {step.icon}
                    </Avatar>
                  )}
                  sx={{ mb: 2 }}
                >
                  <Typography variant="h5" fontWeight="600">
                    {step.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {step.description}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Paper elevation={1} sx={{ p: 3, mt: 2, borderRadius: 2 }}>
                    <Grid container spacing={2}>
                      {step.details.map((detail, idx) => (
                        <Grid item xs={12} sm={6} key={idx}>
                          <Box display="flex" alignItems="center">
                            <CheckCircle color="success" sx={{ mr: 1, fontSize: 20 }} />
                            <Typography variant="body2">{detail}</Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Paper>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </motion.div>
      </Container>

      {/* Features Tabs */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h3" textAlign="center" gutterBottom fontWeight="bold">
              Powerful Features for Every Stage
            </Typography>
            <Typography variant="h6" textAlign="center" color="text.secondary" mb={6}>
              Comprehensive tools designed for modern innovation teams
            </Typography>

            <Paper elevation={2} sx={{ borderRadius: 3 }}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                variant="fullWidth"
                sx={{ borderBottom: 1, borderColor: 'divider' }}
              >
                {features.map((feature, index) => (
                  <Tab
                    key={index}
                    icon={feature.icon}
                    label={feature.title}
                    iconPosition="start"
                    sx={{ py: 2 }}
                  />
                ))}
              </Tabs>
              {features.map((feature, index) => (
                <TabPanel key={index} value={activeTab} index={index}>
                  {feature.content}
                </TabPanel>
              ))}
            </Paper>
          </motion.div>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" textAlign="center" gutterBottom fontWeight="bold">
            Measurable Results
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" mb={6}>
            Real outcomes our clients achieve
          </Typography>

          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    elevation={3}
                    sx={{
                      height: '100%',
                      p: 3,
                      borderRadius: 3,
                      position: 'relative',
                      overflow: 'visible'
                    }}
                  >
                    <CardContent>
                      <Box display="flex" alignItems="center" mb={2}>
                        {benefit.icon}
                        <Chip
                          label={benefit.metric}
                          color="primary"
                          variant="outlined"
                          sx={{ ml: 'auto', fontWeight: 'bold' }}
                        />
                      </Box>
                      <Typography variant="h5" gutterBottom fontWeight="600">
                        {benefit.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {benefit.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* FAQ Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h3" textAlign="center" gutterBottom fontWeight="bold">
              Frequently Asked Questions
            </Typography>
            <Typography variant="h6" textAlign="center" color="text.secondary" mb={6}>
              Everything you need to know about our platform
            </Typography>

            {faqs.map((faq, index) => (
              <Accordion key={index} elevation={1} sx={{ mb: 2, borderRadius: 2 }}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography variant="h6" fontWeight="600">
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" color="text.secondary">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </motion.div>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={4}
            sx={{
              p: 6,
              textAlign: 'center',
              borderRadius: 4,
              background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
              color: 'white'
            }}
          >
            <Typography variant="h4" gutterBottom fontWeight="bold">
              Ready to Transform Your Innovation Pipeline?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Join 250+ companies already accelerating their innovation with our platform
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  '&:hover': {
                    bgcolor: 'grey.100',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Start Free Trial
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                Schedule Demo
              </Button>
            </Stack>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HowItWorks; 