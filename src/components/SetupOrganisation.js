import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  LinearProgress,
  List,
  ListItemText,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  TextField,
  useMediaQuery,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

// Dummy data for scraping progress
const dummyScrapingData = [
  {
    id: 1,
    url: 'https://example.com/home',
    status: 'Scraped',
    chunks: [
      { id: 1, content: 'Welcome to our homepage!' },
      { id: 2, content: 'We provide the best services.' },
    ],
  },
  {
    id: 2,
    url: 'https://example.com/about',
    status: 'Scraped',
    chunks: [
      { id: 1, content: 'About Us: Learn more about our mission.' },
      { id: 2, content: 'Our team is dedicated to excellence.' },
    ],
  },
  {
    id: 3,
    url: 'https://example.com/contact',
    status: 'Pending',
    chunks: [],
  },
];

// Animation variants for framer-motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

function SetupOrganisation() {
  const [companyName, setCompanyName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [description, setDescription] = useState('');
  const [scrapingProgress, setScrapingProgress] = useState(50); // Dummy progress
  const [selectedWebpage, setSelectedWebpage] = useState(null);
  const isMobile = useMediaQuery('(max-width:600px)');
  const navigate = useNavigate();

  // Handle fetching meta description (dummy function)
  const handleFetchMetaDescription = () => {
    setDescription('This is a dummy meta description fetched from the website.');
  };

  // Handle webpage click to show data chunks
  const handleWebpageClick = (webpage) => {
    setSelectedWebpage(webpage);
  };

  const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/chatbot-integration');
      };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <Container maxWidth="sm">
        <Box mt={5} sx={{ padding: isMobile ? 2 : 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Setup Your Organisation
          </Typography>
          <form onSubmit={handleSubmit}>
            {/* Company Name */}
            <TextField
              label="Company Name"
              fullWidth
              margin="normal"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />

            {/* Website URL */}
            <TextField
              label="Website URL"
              fullWidth
              margin="normal"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              required
            />

            {/* Fetch Meta Description Button */}
            <Button
              variant="outlined"
              onClick={handleFetchMetaDescription}
              sx={{ mt: 1 }}
            >
              Fetch Meta Description
            </Button>

            {/* Company Description */}
            <TextField
              label="Company Description"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            {/* Scraping Progress Section */}
            <Typography variant="h6" sx={{ mt: 3 }}>
              Website Scraping Progress
            </Typography>
            <LinearProgress
              variant="determinate"
              value={scrapingProgress}
              sx={{ mt: 2, mb: 3 }}
            />

            {/* List of Webpages */}
            <List>
              {dummyScrapingData.map((webpage) => (
                <Accordion
                  key={webpage.id}
                  onClick={() => handleWebpageClick(webpage)}
                  sx={{ mb: 2 }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <ListItemText
                      primary={webpage.url}
                      secondary={
                        <Chip
                          label={webpage.status}
                          color={
                            webpage.status === 'Scraped'
                              ? 'success'
                              : webpage.status === 'Pending'
                              ? 'warning'
                              : 'default'
                          }
                          size="small"
                        />
                      }
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    {webpage.chunks.length > 0 ? (
                      webpage.chunks.map((chunk) => (
                        <Box key={chunk.id} sx={{ mb: 2 }}>
                          <Typography variant="body2">{chunk.content}</Typography>
                        </Box>
                      ))
                    ) : (
                      <Typography variant="body2" color="textSecondary">
                        No data scraped yet.
                      </Typography>
                    )}
                  </AccordionDetails>
                </Accordion>
              ))}
            </List>

            {/* Proceed Button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Proceed to Next Step
            </Button>
          </form>
        </Box>
      </Container>
    </motion.div>
  );
}

export default SetupOrganisation;