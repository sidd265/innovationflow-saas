import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  LinearProgress,
  Avatar,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  FormControl,
  InputLabel,
  Alert,
  Snackbar,
  Fab,
  Tooltip
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Science,
  Group,
  Assignment,
  MoreVert,
  Add,
  Notifications,
  Analytics,
  Timeline,
  Edit,
  Delete,
  Visibility,
  Share,
  Archive,
  Person,
  Assessment
} from '@mui/icons-material';

interface Project {
  id: string;
  name: string;
  description: string;
  status: 'Planning' | 'In Progress' | 'Review' | 'Completed' | 'On Hold';
  progress: number;
  team: string[];
  deadline: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  createdAt: string;
  budget: number;
  category: string;
}

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
}

const Dashboard: React.FC = () => {
  // State Management
  const [projects, setProjects] = useState<Project[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [openProjectDialog, setOpenProjectDialog] = useState(false);
  const [openTeamDialog, setOpenTeamDialog] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });
  
  // New Project Form State
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    status: 'Planning' as Project['status'],
    deadline: '',
    priority: 'Medium' as Project['priority'],
    budget: 0,
    category: '',
    team: [] as string[]
  });

  // New Team Member Form State
  const [newTeamMember, setNewTeamMember] = useState({
    name: '',
    email: '',
    role: ''
  });

  // Load data on component mount
  useEffect(() => {
    loadProjects();
    loadTeamMembers();
  }, []);

  // Data Loading Functions
  const loadProjects = () => {
    const savedProjects = localStorage.getItem('innovationflow_projects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      // Initialize with one example project
      const initialProjects: Project[] = [{
        id: '1',
        name: 'Welcome Project',
        description: 'Your first project to get started with InnovationFlow',
        status: 'In Progress',
        progress: 25,
        team: ['You'],
        deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        priority: 'Medium',
        createdAt: new Date().toISOString(),
        budget: 10000,
        category: 'Getting Started'
      }];
      setProjects(initialProjects);
      localStorage.setItem('innovationflow_projects', JSON.stringify(initialProjects));
    }
  };

  const loadTeamMembers = () => {
    const savedMembers = localStorage.getItem('innovationflow_team');
    if (savedMembers) {
      setTeamMembers(JSON.parse(savedMembers));
    } else {
      const initialMembers: TeamMember[] = [{
        id: '1',
        name: 'You',
        email: 'you@company.com',
        role: 'Project Manager',
        avatar: 'YU'
      }];
      setTeamMembers(initialMembers);
      localStorage.setItem('innovationflow_team', JSON.stringify(initialMembers));
    }
  };

  // Project Management Functions
  const handleCreateProject = () => {
    if (!newProject.name || !newProject.description) {
      setSnackbar({ open: true, message: 'Please fill in all required fields', severity: 'error' });
      return;
    }

    const project: Project = {
      id: Date.now().toString(),
      name: newProject.name,
      description: newProject.description,
      status: newProject.status,
      progress: 0,
      team: newProject.team.length > 0 ? newProject.team : ['You'],
      deadline: newProject.deadline,
      priority: newProject.priority,
      createdAt: new Date().toISOString(),
      budget: newProject.budget,
      category: newProject.category
    };

    const updatedProjects = [...projects, project];
    setProjects(updatedProjects);
    localStorage.setItem('innovationflow_projects', JSON.stringify(updatedProjects));
    
    setOpenProjectDialog(false);
    setNewProject({
      name: '',
      description: '',
      status: 'Planning',
      deadline: '',
      priority: 'Medium',
      budget: 0,
      category: '',
      team: []
    });
    
    setSnackbar({ open: true, message: 'Project created successfully!', severity: 'success' });
  };

  const handleDeleteProject = (projectId: string) => {
    const updatedProjects = projects.filter(p => p.id !== projectId);
    setProjects(updatedProjects);
    localStorage.setItem('innovationflow_projects', JSON.stringify(updatedProjects));
    setSnackbar({ open: true, message: 'Project deleted successfully!', severity: 'success' });
    handleMenuClose();
  };

  const handleUpdateProjectProgress = (projectId: string, newProgress: number) => {
    const updatedProjects = projects.map(p => 
      p.id === projectId ? { ...p, progress: newProgress } : p
    );
    setProjects(updatedProjects);
    localStorage.setItem('innovationflow_projects', JSON.stringify(updatedProjects));
  };

  // Team Management Functions
  const handleAddTeamMember = () => {
    if (!newTeamMember.name || !newTeamMember.email) {
      setSnackbar({ open: true, message: 'Please fill in all required fields', severity: 'error' });
      return;
    }

    const member: TeamMember = {
      id: Date.now().toString(),
      name: newTeamMember.name,
      email: newTeamMember.email,
      role: newTeamMember.role,
      avatar: newTeamMember.name.split(' ').map(n => n[0]).join('').toUpperCase()
    };

    const updatedMembers = [...teamMembers, member];
    setTeamMembers(updatedMembers);
    localStorage.setItem('innovationflow_team', JSON.stringify(updatedMembers));
    
    setOpenTeamDialog(false);
    setNewTeamMember({ name: '', email: '', role: '' });
    setSnackbar({ open: true, message: 'Team member added successfully!', severity: 'success' });
  };

  // Menu Handlers
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, project: Project) => {
    setAnchorEl(event.currentTarget);
    setSelectedProject(project);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedProject(null);
  };

  // Utility Functions
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress': return 'primary';
      case 'Review': return 'warning';
      case 'Planning': return 'info';
      case 'Completed': return 'success';
      case 'On Hold': return 'error';
      default: return 'default';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'error';
      case 'High': return 'warning';
      case 'Medium': return 'info';
      case 'Low': return 'success';
      default: return 'default';
    }
  };

  // Calculate Stats
  const stats = [
    {
      title: 'Active Projects',
      value: projects.filter(p => p.status === 'In Progress').length.toString(),
      change: `+${projects.length > 0 ? Math.round((projects.filter(p => p.status === 'In Progress').length / projects.length) * 100) : 0}%`,
      icon: <Assignment sx={{ fontSize: 40, color: 'primary.main' }} />,
      color: 'primary'
    },
    {
      title: 'Success Rate',
      value: `${projects.length > 0 ? Math.round((projects.filter(p => p.status === 'Completed').length / projects.length) * 100) : 0}%`,
      change: `${projects.filter(p => p.status === 'Completed').length} completed`,
      icon: <TrendingUp sx={{ fontSize: 40, color: 'success.main' }} />,
      color: 'success'
    },
    {
      title: 'Team Members',
      value: teamMembers.length.toString(),
      change: `${teamMembers.length > 1 ? 'Active team' : 'Solo'}`,
      icon: <Group sx={{ fontSize: 40, color: 'info.main' }} />,
      color: 'info'
    },
    {
      title: 'Total Budget',
      value: `$${projects.reduce((sum, p) => sum + p.budget, 0).toLocaleString()}`,
      change: `${projects.length} projects`,
      icon: <Science sx={{ fontSize: 40, color: 'warning.main' }} />,
      color: 'warning'
    }
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 4, minHeight: '100vh' }}>
      {/* Header */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Innovation Dashboard 🚀
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Manage your innovation pipeline and track project success.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={() => setOpenProjectDialog(true)}
              sx={{
                borderRadius: 3,
                background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                px: 3,
                py: 1.5,
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(25, 118, 210, 0.3)'
                }
              }}
            >
              New Project
            </Button>
            <Tooltip title="Notifications">
              <IconButton
                sx={{
                  border: 1,
                  borderColor: 'grey.300',
                  '&:hover': { borderColor: 'primary.main' }
                }}
              >
                <Notifications />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.200',
                  '&:hover': {
                    borderColor: `${stat.color}.main`,
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
                  },
                  transition: 'all 0.3s ease',
                  textAlign: 'center'
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    {stat.icon}
                  </Box>
                  <Typography variant="h3" fontWeight="bold" color="text.primary" sx={{ mb: 1 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {stat.title}
                  </Typography>
                  <Chip
                    label={stat.change}
                    color={stat.color as any}
                    size="small"
                    variant="outlined"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4}>
        {/* Projects Table */}
        <Grid item xs={12} lg={8}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card elevation={3} sx={{ borderRadius: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h5" fontWeight="bold">
                    Your Projects ({projects.length})
                  </Typography>
                  <Button 
                    variant="text" 
                    color="primary"
                    onClick={() => setOpenProjectDialog(true)}
                    startIcon={<Add />}
                  >
                    Add Project
                  </Button>
                </Box>

                {projects.length === 0 ? (
                  <Box sx={{ textAlign: 'center', py: 6 }}>
                    <Assignment sx={{ fontSize: 64, color: 'grey.400', mb: 2 }} />
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                      No Projects Yet
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      Create your first project to get started with innovation management.
                    </Typography>
                    <Button
                      variant="contained"
                      startIcon={<Add />}
                      onClick={() => setOpenProjectDialog(true)}
                    >
                      Create First Project
                    </Button>
                  </Box>
                ) : (
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell><strong>Project</strong></TableCell>
                          <TableCell><strong>Status</strong></TableCell>
                          <TableCell><strong>Progress</strong></TableCell>
                          <TableCell><strong>Team</strong></TableCell>
                          <TableCell><strong>Priority</strong></TableCell>
                          <TableCell><strong>Actions</strong></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {projects.map((project) => (
                          <TableRow key={project.id} hover>
                            <TableCell>
                              <Box>
                                <Typography variant="subtitle2" fontWeight="600">
                                  {project.name}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                  Due: {new Date(project.deadline).toLocaleDateString()}
                                </Typography>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Chip
                                label={project.status}
                                color={getStatusColor(project.status) as any}
                                size="small"
                                variant="outlined"
                              />
                            </TableCell>
                            <TableCell>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}>
                                <LinearProgress
                                  variant="determinate"
                                  value={project.progress}
                                  sx={{ width: 80, height: 8, borderRadius: 4 }}
                                  onClick={() => {
                                    const newProgress = Math.min(project.progress + 10, 100);
                                    handleUpdateProjectProgress(project.id, newProgress);
                                  }}
                                />
                                <Typography variant="caption" fontWeight="600">
                                  {project.progress}%
                                </Typography>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Box sx={{ display: 'flex', gap: 0.5 }}>
                                {project.team.slice(0, 3).map((member, idx) => (
                                  <Avatar
                                    key={idx}
                                    sx={{
                                      width: 32,
                                      height: 32,
                                      fontSize: '0.75rem',
                                      bgcolor: 'primary.main'
                                    }}
                                  >
                                    {member.charAt(0)}
                                  </Avatar>
                                ))}
                                {project.team.length > 3 && (
                                  <Avatar
                                    sx={{
                                      width: 32,
                                      height: 32,
                                      fontSize: '0.75rem',
                                      bgcolor: 'grey.400'
                                    }}
                                  >
                                    +{project.team.length - 3}
                                  </Avatar>
                                )}
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Chip
                                label={project.priority}
                                color={getPriorityColor(project.priority) as any}
                                size="small"
                              />
                            </TableCell>
                            <TableCell>
                              <IconButton
                                size="small"
                                onClick={(e) => handleMenuClick(e, project)}
                              >
                                <MoreVert />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Quick Actions Sidebar */}
        <Grid item xs={12} lg={4}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card elevation={3} sx={{ borderRadius: 3, mb: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Quick Actions
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<Add />}
                    onClick={() => setOpenProjectDialog(true)}
                    sx={{ justifyContent: 'flex-start', borderRadius: 2, py: 1.5 }}
                  >
                    Create New Project
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<Person />}
                    onClick={() => setOpenTeamDialog(true)}
                    sx={{ justifyContent: 'flex-start', borderRadius: 2, py: 1.5 }}
                  >
                    Add Team Member
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<Assessment />}
                    onClick={() => setSnackbar({ open: true, message: 'Analytics feature coming soon!', severity: 'success' })}
                    sx={{ justifyContent: 'flex-start', borderRadius: 2, py: 1.5 }}
                  >
                    Generate Report
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<Timeline />}
                    onClick={() => setSnackbar({ open: true, message: 'Timeline view coming soon!', severity: 'success' })}
                    sx={{ justifyContent: 'flex-start', borderRadius: 2, py: 1.5 }}
                  >
                    View Timeline
                  </Button>
                </Box>
              </CardContent>
            </Card>

            {/* Team Members */}
            <Card 
              elevation={3} 
              sx={{ borderRadius: 3 }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" fontWeight="bold">
                    Team Members ({teamMembers.length})
                  </Typography>
                  <IconButton size="small" onClick={() => setOpenTeamDialog(true)}>
                    <Add />
                  </IconButton>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {teamMembers.map((member) => (
                    <Box key={member.id} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ bgcolor: 'primary.main' }}>
                        {member.avatar}
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle2" fontWeight="600">
                          {member.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {member.role}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="add"
        onClick={() => setOpenProjectDialog(true)}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
          '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: '0 8px 25px rgba(25, 118, 210, 0.4)'
          }
        }}
      >
        <Add />
      </Fab>

      {/* New Project Dialog */}
      <Dialog open={openProjectDialog} onClose={() => setOpenProjectDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>Create New Project</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, pt: 1 }}>
            <TextField
              fullWidth
              label="Project Name"
              value={newProject.name}
              onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
              required
            />
            <TextField
              fullWidth
              label="Description"
              multiline
              rows={3}
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              required
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={newProject.status}
                    label="Status"
                    onChange={(e) => setNewProject({ ...newProject, status: e.target.value as Project['status'] })}
                  >
                    <MenuItem value="Planning">Planning</MenuItem>
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="Review">Review</MenuItem>
                    <MenuItem value="On Hold">On Hold</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>Priority</InputLabel>
                  <Select
                    value={newProject.priority}
                    label="Priority"
                    onChange={(e) => setNewProject({ ...newProject, priority: e.target.value as Project['priority'] })}
                  >
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                    <MenuItem value="Critical">Critical</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Deadline"
                  type="date"
                  value={newProject.deadline}
                  onChange={(e) => setNewProject({ ...newProject, deadline: e.target.value })}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Budget"
                  type="number"
                  value={newProject.budget}
                  onChange={(e) => setNewProject({ ...newProject, budget: Number(e.target.value) })}
                />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              label="Category"
              value={newProject.category}
              onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenProjectDialog(false)}>Cancel</Button>
          <Button onClick={handleCreateProject} variant="contained">
            Create Project
          </Button>
        </DialogActions>
      </Dialog>

      {/* New Team Member Dialog */}
      <Dialog open={openTeamDialog} onClose={() => setOpenTeamDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add Team Member</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, pt: 1 }}>
            <TextField
              fullWidth
              label="Full Name"
              value={newTeamMember.name}
              onChange={(e) => setNewTeamMember({ ...newTeamMember, name: e.target.value })}
              required
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={newTeamMember.email}
              onChange={(e) => setNewTeamMember({ ...newTeamMember, email: e.target.value })}
              required
            />
            <TextField
              fullWidth
              label="Role"
              value={newTeamMember.role}
              onChange={(e) => setNewTeamMember({ ...newTeamMember, role: e.target.value })}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenTeamDialog(false)}>Cancel</Button>
          <Button onClick={handleAddTeamMember} variant="contained">
            Add Member
          </Button>
        </DialogActions>
      </Dialog>

      {/* Project Actions Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={() => {
          setSnackbar({ open: true, message: `Viewing ${selectedProject?.name}`, severity: 'success' });
          handleMenuClose();
        }}>
          <Visibility sx={{ mr: 1 }} /> View Details
        </MenuItem>
        <MenuItem onClick={() => {
          setSnackbar({ open: true, message: 'Edit feature coming soon!', severity: 'success' });
          handleMenuClose();
        }}>
          <Edit sx={{ mr: 1 }} /> Edit Project
        </MenuItem>
        <MenuItem onClick={() => {
          setSnackbar({ open: true, message: 'Share feature coming soon!', severity: 'success' });
          handleMenuClose();
        }}>
          <Share sx={{ mr: 1 }} /> Share
        </MenuItem>
        <MenuItem onClick={() => selectedProject && handleDeleteProject(selectedProject.id)}>
          <Delete sx={{ mr: 1 }} /> Delete
        </MenuItem>
      </Menu>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert 
          onClose={() => setSnackbar({ ...snackbar, open: false })} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Dashboard; 