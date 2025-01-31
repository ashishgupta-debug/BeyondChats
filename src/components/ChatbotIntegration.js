import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Modal,
  TextField,
  AppBar,
  Toolbar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChatIcon from '@mui/icons-material/Chat';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';
import ErrorOutline from '@mui/icons-material/ErrorOutline';
import Confetti from 'react-confetti';

function ChatbotIntegration() {
  const [isTestChatbotOpen, setIsTestChatbotOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [isIntegrationSuccessful, setIsIntegrationSuccessful] = useState(false);
  const [integrationError, setIntegrationError] = useState(false);
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false); // State to manage chatbot visibility
  const [chatbotMessages, setChatbotMessages] = useState([]); // State for chatbot messages
  const [userInput, setUserInput] = useState(''); // State for user input
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");


  // Open the client's website with a dummy chatbot
  const handleTestChatbot = () => {
    setIsTestChatbotOpen(true);
  };

  // Handle feedback submission
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setIsFeedbackSubmitted(true);
    setTimeout(() => {
      setIsFeedbackModalOpen(false);
      setIsFeedbackSubmitted(false);
      setFeedback('');
    }, 2000);
  };

  // Handle integration test
  const handleIntegrationTest = () => {
    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
      setIsIntegrationSuccessful(true);
      setIntegrationError(false);
    } else {
      setIntegrationError(true);
      setIsIntegrationSuccessful(false);
    }
  };

  const dummyScript = `<script src="https://yourchatbot.com/embed.js" defer></script>`;

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setEmail("");
    setEmailSent(false);
    setError("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(dummyScript);
    alert("Script copied to clipboard!");
  }; 

  const handleSendEmail = () => {
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    
    // Simulate email sending process
    setTimeout(() => {
      setEmailSent(true);
      setError("");
    }, 1000);
  };

  // Handle user input in the chatbot
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  // Handle sending a message in the chatbot
  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    // Add user message to the chat
    setChatbotMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: userInput },
    ]);

    // Simulate chatbot response
    setTimeout(() => {
      setChatbotMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: 'Thank you for your message! How can I assist you further?' },
      ]);
    }, 1000);

    // Clear the input field
    setUserInput('');
  };

  return (
    <Container maxWidth="sm">
      {/* Confetti animation for success */}
      {isIntegrationSuccessful && <Confetti />}

      <Box mt={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Chatbot Integration & Testing
        </Typography>

        {/* Test Chatbot Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleTestChatbot}
        >
          Test Chatbot
        </Button>

        {/* Integrate on Your Website Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          // onClick={() => setIsIntegrationModalOpen(true)}
          onClick={handleOpen}
        >
          Integrate on Your Website
        </Button>

        {/* Test Integration Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}a
          onClick={handleIntegrationTest}
        >
          Test Integration
        </Button>

        {/* Success UI */}
        {isIntegrationSuccessful && (
          <Box mt={3} textAlign="center">
            <Typography variant="h5" color="success.main" gutterBottom>
              <CheckCircleOutline fontSize="large" /> Integration Successful!
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }}>
              Explore Admin Panel
            </Button>
            <Button variant="outlined" sx={{ mt: 2, ml: 2 }}>
              Start Talking to Your Chatbot
            </Button>
            <Box mt={2}>
              <Typography variant="body1">Share on:</Typography>
              <Button sx={{ ml: 1 }}>Twitter</Button>
              <Button>LinkedIn</Button>
              <Button>Facebook</Button>
            </Box>
          </Box>
        )}

        {/* Error UI */}
        {integrationError && (
          <Box mt={3} textAlign="center">
            <Typography variant="h5" color="error.main" gutterBottom>
              <ErrorOutline fontSize="large" /> Integration Not Detected
            </Typography>
            <Typography variant="body1">
              Please check your implementation and try again.
            </Typography>
          </Box>
        )}
      </Box>

      {/* Modal for Testing Chatbot */}
      <Modal
        open={isTestChatbotOpen}
        onClose={() => setIsTestChatbotOpen(false)}
        aria-labelledby="test-chatbot-modal"
        aria-describedby="test-chatbot-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: 800,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          {/* Topbar with Feedback Link */}
          <AppBar position="static" sx={{ mb: 2 }}>
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Testing Chatbot
              </Typography>
              <Button
                color="inherit"
                onClick={() => setIsFeedbackModalOpen(true)}
              >
                Chatbot not working as intended? Share feedback
              </Button>
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => setIsTestChatbotOpen(false)}
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>

          {/* Embedded Website with Dummy Chatbot */}
          <Box sx={{ height: '60vh', overflow: 'hidden', position: 'relative' }}>
            <iframe
              src="https://example.com"
              title="Client Website"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            />
            {/* Dummy Chatbot Icon */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 16,
                right: 16,
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: '50%',
                width: 56,
                height: 56,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 3,
                cursor: 'pointer',
              }}
              onClick={() => setIsChatbotOpen(true)} // Open chatbot on click
            >
              <ChatIcon />
            </Box>
          </Box>

          {/* Chatbot Interface */}
          {isChatbotOpen && (
            <Box
              sx={{
                position: 'absolute',
                bottom: 80,
                right: 16,
                width: 300,
                bgcolor: 'background.paper',
                boxShadow: 3,
                borderRadius: 2,
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              {/* Chatbot Header with Close Button */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6">Chatbot</Typography>
                <IconButton
                  size="small"
                  onClick={() => setIsChatbotOpen(false)} // Close chatbot on click
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              {/* Chat Messages */}
              <Box sx={{ height: 200, overflowY: 'auto', mb: 2 }}>
                {chatbotMessages.map((message, index) => (
                  <Box
                    key={index}
                    sx={{
                      textAlign: message.sender === 'user' ? 'right' : 'left',
                      mb: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'inline-block',
                        bgcolor: message.sender === 'user' ? '#1976d2' : '#f5f5f5',
                        color: message.sender === 'user' ? 'white' : 'black',
                        p: 1,
                        borderRadius: 1,
                      }}
                    >
                      {message.text}
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* Chat Input */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  fullWidth
                  size="small"
                  value={userInput}
                  onChange={handleUserInput}
                  placeholder="Type a message..."
                />
                <Button variant="contained" onClick={handleSendMessage}>
                  Send
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Modal>

      {/* Feedback Modal */}
      <Modal
        open={isFeedbackModalOpen}
        onClose={() => setIsFeedbackModalOpen(false)}
        aria-labelledby="feedback-modal"
        aria-describedby="feedback-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Share Feedback
          </Typography>
          <form onSubmit={handleFeedbackSubmit}>
            <TextField
              label="Your Feedback"
              fullWidth
              multiline
              rows={4}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>

      {/* Snackbar for Feedback Submission Success */}
      <Snackbar
        open={isFeedbackSubmitted}
        autoHideDuration={3000}
        onClose={() => setIsFeedbackSubmitted(false)}
      >
        <Alert
          onClose={() => setIsFeedbackSubmitted(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Feedback submitted successfully!
        </Alert>
      </Snackbar>

      {/* Integration Instructions Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Integrate Chatbot</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            Copy and paste the following script inside the <code>&lt;head&gt;</code> of your website:
          </Typography>
          <Box component="pre" bgcolor="#f5f5f5" p={2} borderRadius={1}>
            {dummyScript}
          </Box>
          <Button onClick={handleCopy} variant="outlined" sx={{ mt: 1 }}>
            Copy Script
          </Button>

          <Typography mt={3} gutterBottom>
            Or, send instructions to your developer:
          </Typography>
          <TextField
            fullWidth
            label="Developer's Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(error)}
            helperText={error}
            sx={{ mt: 1 }}
          />
          <Button
            onClick={handleSendEmail}
            variant="contained"
            color="secondary"
            sx={{ mt: 2 }}
          >
            Send Email
          </Button>
          {emailSent && (
            <Typography color="success.main" mt={1}>
              Instructions sent successfully!
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default ChatbotIntegration;