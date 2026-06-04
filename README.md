# 🚀 Sarthi.AI – AI Website Builder

Sarthi.AI is an AI-powered website builder that generates complete responsive websites from natural language prompts. Users can describe the website they want, and the platform generates production-ready HTML, CSS, and JavaScript code using AI.

## ✨ Features

- 🤖 AI-powered website generation using DeepSeek via OpenRouter
- 🎨 Generates complete HTML, CSS, and JavaScript code
- 📱 Fully responsive website output
- 🔐 Google Authentication using Firebase
- 💾 Website storage and management with MongoDB
- 📝 Edit and regenerate existing websites
- ⚡ Real-time AI code generation
- 🎯 Credit-based usage system
- 🌐 Website deployment with unique public URLs
- 💳 Payment integration (In Progress)

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Redux Toolkit
- Tailwind CSS
- Axios
- React Router DOM
- Framer Motion

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

### AI Integration
- OpenRouter API
- DeepSeek Model

### Authentication
- Firebase Authentication
- Google Sign-In

### Payments
- Razorpay (In Progress)

---

## 📌 How It Works

1. User signs in using Google Authentication.
2. User enters a prompt describing the website.
3. Backend sends the prompt to the AI model via OpenRouter.
4. AI generates complete HTML, CSS, and JavaScript code.
5. Generated code is stored in MongoDB.
6. Users can:
   - View generated websites
   - Modify websites using AI
   - Deploy websites with a unique URL

---

## 📂 Project Structure

```text
AIWebsiteBuilder/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── package.json
│
└── README.md
```

## ⚙️ Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=
MONGO_URI=
JWT_SECRET=
OPENROUTER_API_KEY=
FRONTEND_URL=
```

Frontend `.env`

```env
VITE_SERVER_URL=
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
```

---

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```
---

## 🔮 Future Enhancements

- Razorpay Payment Integration
- Custom Domain Support
- Website Templates
- Export ZIP Feature
- Team Collaboration
- Version History
- AI Chat Assistant

---

## 👩‍💻 Author

**Vishakha Gautam**

- LinkedIn: https://www.linkedin.com/in/vishakha-gautam-383956252/
- GitHub: https://github.com/Vishakha2431

---

## ⭐ Support

If you found this project helpful, consider giving it a star on GitHub.
