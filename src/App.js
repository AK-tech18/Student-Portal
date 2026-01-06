import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import StudyMaterial from "./components/StudyMaterial";
import ExamPlanner from "./components/ExamPlanner";
import AIInsights from "./components/ai-insights";
import Settings from "./components/Settings";
import PracticeQuestions from "./components/PracticeQuestions";
import PYQ from "./components/PYQ";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("dashboard");

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  if (page === "study") {
    return (
      <StudyMaterial
        back={() => setPage("dashboard")}
        goPractice={() => setPage("practice")}
        goPYQ={() => setPage("pyq")}
      />
    );
  }

  if (page === "practice") {
    return <PracticeQuestions goBack={() => setPage("study")} />;
  }

  if (page === "pyq") {
    return <PYQ goBack={() => setPage("study")} />;
  }

  if (page === "planner") {
    return <ExamPlanner back={() => setPage("dashboard")} />;
  }

  if (page === "ai") {
    return <AIInsights back={() => setPage("dashboard")} />;
  }

  if (page === "settings") {
    return <Settings back={() => setPage("dashboard")} />;
  }

  return (
    <Dashboard
      goStudy={() => setPage("study")}
      goPlanner={() => setPage("planner")}
      goAI={() => setPage("ai")}
      goSettings={() => setPage("settings")}
    />
  );
}

export default App;
