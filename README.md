# BeyondChatsChatbot Integration Project

This project is a **React.js-based UI/UX implementation**. It provides a seamless workflow for users to register, set up their organization, integrate a chatbot, and test it. The project is designed to be **mobile-responsive** and includes features like feedback submission, chatbot testing, and integration instructions.

---

## Features

1. **User Registration:**
   - Users can register by entering their name, email, and password.
   - Email verification is required to ensure genuine registrations.

2. **Setup Organisation:**
   - Users can enter their company details, including name, website URL, and description.
   - The system auto-fetches the meta description from the website URL (bonus feature).
   - Displays scraping progress for the website, including detected, scraped, and pending webpages.

3. **Chatbot Integration & Testing:**
   - **Test Chatbot:** Opens the client's website with a dummy chatbot integrated in the bottom-right corner.
   - **Integrate on Your Website:** Provides two options:
     - Copy-paste a dummy integration code into the `<head>` of the website.
     - Mail integration instructions to the client's developer.
   - **Test Integration:** Simulates integration testing and displays success or error messages.

4. **Feedback Submission:**
   - Users can submit feedback if the chatbot is not working as intended.
   - A success message is displayed after submission.

5. **Responsive Design:**
   - The UI is optimized for both **desktop** and **mobile** screens.

6. **Animations and Transitions:**
   - Includes subtle animations for page transitions and success messages (e.g., confetti for successful integration).

---

## Technologies Used

- **Frontend:**
  - React.js
  - Material-UI (MUI) for UI components and styling
  - Framer Motion for animations
  - React Confetti for success animations
---

## Installation and Setup

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Steps to Run the Project

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ashishgupta-debug/BeyondChats
   cd beyondchats-chatbot-integration
2. **Install Dependencies:**
     npm install
3. **Run the Development Server:**
     npm start
4. **Open the Application:**
    Open your browser and navigate to http://localhost:3000.

## Deployed Link
You can access the live version of this project here:
👉 https://beyond-chats-two.vercel.app/chatbot-integration

## Project Structure
beyondchats-chatbot-integration/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── UserRegistration.js
│   │   ├── SetupOrganisation.js
│   │   └── ChatbotIntegration.js
│   ├── App.js
│   ├── index.js
│   └── theme.js
├── package.json
├── README.md
└── .gitignore
