import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserRegistration from './components/UserRegistration';
import SetupOrganisation from './components/SetupOrganisation';
import ChatbotIntegration from './components/ChatbotIntegration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserRegistration />} />
        <Route path="/setup-organisation" element={<SetupOrganisation />} />
        <Route path="/chatbot-integration" element={<ChatbotIntegration />} />
      </Routes>
    </Router>
  );
}

export default App;