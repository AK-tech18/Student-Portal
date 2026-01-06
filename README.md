# 🎓 Smart Helper – Student Productivity Dashboard

Smart Helper is a **React-based student productivity dashboard** built to help students manage their **study materials, exam planning, practice questions, PYQs, and AI-driven insights** in one unified platform.

This project is developed as a **functional MVP (Minimum Viable Product)** with a strong focus on **clean UI/UX, structured navigation, and real-world student exam preparation needs**.

---

## 🚀 Features

### 🔐 Login System
- Simple and clean login interface
- Prototype-based authentication flow for MVP demonstration

### 📊 Dashboard
- Central hub with quick-access feature cards
- Sidebar-based navigation with main content and right panel
- Motivation section and smart alerts for better engagement

### 📚 Study Material
- Premium subject cards for:
  - **Data Structures** (PDF Notes)
  - **Operating Systems** (PPTs)
  - **DBMS** (Important Questions)
- Progress indicators for each subject
- Quick actions: View & Download

### 📝 Practice Questions
- Topic-wise curated questions focused on exams:
  - Trees
  - Graphs
  - Arrays
- Designed to strengthen problem-solving confidence

### 📂 PYQs (Previous Year Questions)
- Frequently repeated exam questions
- Topic-based PYQ access
- AI-supported prioritization for smart preparation

### 📅 Exam Planner
- Displays upcoming exams and deadlines
- Highlights urgent tasks
- Includes AI tips for effective time management

### 📊 AI Exam Insights
- Lightweight AI logic analyses **PYQ topic frequency**
- Dynamically identifies **high-priority exam topics**
- Visually highlights recommended topics
- Re-run analysis option to simulate adaptive AI behaviour

### ⚙️ Settings
- Manage user preferences (Notifications, Theme, Profile)
- Clean and modern interface
- Easy navigation back to dashboard

---

## 🧠 AI Implementation (Explanation)

The AI module in Smart Helper focuses on **exam trend analysis** rather than heavy machine learning.

- Uses **previous year question (PYQ) topic frequency**
- Detects patterns in commonly repeated topics
- Dynamically recommends **high-priority subjects**
- Provides **visual feedback** by highlighting recommended topics
- Designed as an explainable, frontend-based AI suitable for MVP and hackathon demonstrations

This approach ensures **clarity, transparency, and scalability for future ML integration**.

---

## 🛠️ Tech Stack

- **Frontend:** React (Functional Components)
- **Styling:** Pure CSS (No Tailwind / Bootstrap / Material UI)
- **State Management:** React `useState`
- **Architecture:** Component-based Single Page Application (SPA)

---

## 📁 Project Structure

src/
│── components/
│ ├── Login.jsx
│ ├── Dashboard.jsx
│ ├── Sidebar.jsx
│ ├── MainContent.jsx
│ ├── RightPanel.jsx
│ ├── StudyMaterial.jsx
│ ├── PracticeQuestions.jsx
│ ├── PYQ.jsx
│ ├── ExamPlanner.jsx
│ ├── AIInsights.jsx
│ └── Settings.jsx
│
│── styles/
│ ├── login.css
│ ├── dashboard.css
│ └── pages.css
│
│── App.js
│── index.js

---

## 🎯 Project Objective

The main objectives of Smart Helper are:
- Improve student productivity
- Centralize academic resources
- Assist in smart exam preparation
- Demonstrate AI-driven prioritization in an understandable way
- Provide a distraction-free and intuitive interface

---

## 📌 Project Status

✅ UI Completed  
✅ Navigation & State Management Working  
✅ AI Logic Integrated  
✅ MVP Ready  
🔜 Backend Authentication (Future Scope)  
🔜 Database Integration (Future Scope)

---

## 👥 Team

This project was built as a **team hackathon project**, with collaboration on:
- UI & UX design
- Feature ideation
- Component structuring
- Testing and refinement

---

## 🌱 Future Enhancements

- Backend-based authentication
- Real-time progress tracking
- Advanced AI/ML models for prediction
- Cloud storage for notes and resources
- Improved mobile responsiveness

---

## 📄 License

This project is developed for **educational and hackathon purposes**.

---

⭐ If you find this project useful, feel free to star the repository!
