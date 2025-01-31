import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

function UserRegistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate email verification
    setIsVerified(true);
  };

  const handleVerificationSubmit = (e) => {
    e.preventDefault();
    navigate('/setup-organisation');
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to BeyondChats
        </Typography>
        {!isVerified ? (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              fullWidth
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Sign Up
            </Button>
            <Button variant="outlined" fullWidth sx={{ mt: 2 }}>
              Continue with Google
            </Button>
          </form>
        ) : (
          <form onSubmit={handleVerificationSubmit}>
            <TextField
              label="Verification Code"
              fullWidth
              margin="normal"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Verify
            </Button>
          </form>
        )}
      </Box>
    </Container>
  );
}

export default UserRegistration;