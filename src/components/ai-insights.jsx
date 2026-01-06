import { useState } from "react";
import "../styles/pages.css";

const pyqData = [
  { topic: "Trees", count: 7 },
  { topic: "Graphs", count: 6 },
  { topic: "Arrays", count: 3 },
];

export default function AIInsights({ back }) {
  const [aiPick, setAiPick] = useState(pyqData[0]);

  const rerunAI = () => {
    const next =
      aiPick.topic === "Trees"
        ? pyqData[1]
        : aiPick.topic === "Graphs"
        ? pyqData[2]
        : pyqData[0];

    setAiPick(next);
  };

  return (
    <div className="page">
      <h2>📊 AI Exam Insights</h2>
      <p className="subtitle">Topic-wise important questions based on PYQs</p>

      {/* ===== TOP AI CARDS ===== */}
      <div className="ai-top-cards">
        <div className={`ai-card trees ${aiPick.topic === "Trees" ? "ai-active" : ""}`}>
          <h4>🌳 Trees</h4>
          <p>High Priority</p>
          <span>5 Topics</span>
        </div>

        <div className={`ai-card graphs ${aiPick.topic === "Graphs" ? "ai-active" : ""}`}>
          <h4>🌐 Graphs</h4>
          <p>High Priority</p>
          <span>5 Topics</span>
        </div>

        <div className={`ai-card arrays ${aiPick.topic === "Arrays" ? "ai-active" : ""}`}>
          <h4>📦 Arrays</h4>
          <p>Medium Priority</p>
          <span>5 Topics</span>
        </div>
      </div>

      {/* ===== TOPIC DETAILS ===== */}
      <div className="insight-section trees">
        <h3>🌳 Trees — High Priority</h3>
        <ul>
          <li>Tree Traversals</li>
          <li>BST Operations</li>
          <li>Height & Diameter</li>
          <li>Lowest Common Ancestor</li>
          <li>Balanced Binary Tree</li>
        </ul>
      </div>

      <div className="insight-section graphs">
        <h3>🌐 Graphs — High Priority</h3>
        <ul>
          <li>BFS & DFS</li>
          <li>Cycle Detection</li>
          <li>Topological Sort</li>
          <li>Dijkstra Algorithm</li>
          <li>Minimum Spanning Tree</li>
        </ul>
      </div>

      <div className="insight-section arrays">
        <h3>📦 Arrays — Medium Priority</h3>
        <ul>
          <li>Sliding Window</li>
          <li>Kadane's Algorithm</li>
          <li>Two Pointers</li>
          <li>Binary Search</li>
          <li>Merge Intervals</li>
        </ul>
      </div>

      {/* ===== AI RESULT ===== */}
      <div className="ai-highlight-wrap">
        <div className="ai-highlight">
          🤖 <b>AI Recommendation:</b><br />
          Focus on <b>{aiPick.topic}</b> — most repeated topic in exams
        </div>
      </div>

      {/* ===== ACTION BUTTONS ===== */}
      <div className="ai-actions">
        <div className="ai-btn" onClick={back}>
          ← Back to Dashboard
        </div>

        <div className="ai-btn" onClick={rerunAI}>
          🔄 Re-run AI Analysis
        </div>
      </div>
    </div>
  );
}
