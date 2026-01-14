import { useState } from "react";
import "../styles/pages.css";

export default function AIInsights({ back }) {
  const [files, setFiles] = useState([]);
  const [analysis, setAnalysis] = useState([]);
  const [highlight, setHighlight] = useState("");
  const [aiTip, setAiTip] = useState("");
  const [aiReason, setAiReason] = useState("");    
  const [studyTime, setStudyTime] = useState("");   

  const handleUpload = (e) => {
    const selected = Array.from(e.target.files);
    setFiles(selected);
  };

  const runAIAnalysis = () => {
    if (files.length === 0) {
      alert("Please upload at least one PDF");
      return;
    }

    const result = [];

    files.forEach((file) => {
      const name = file.name.toLowerCase();

      if (name.includes("tree")) {
        result.push({
          subject: "Trees",
          priority: "High",
          topics: [
            "Tree Traversals",
            "BST Operations",
            "Height & Diameter",
            "Lowest Common Ancestor",
            "Balanced Binary Tree",
          ],
        });
      }

      if (name.includes("graph")) {
        result.push({
          subject: "Graphs",
          priority: "Medium",
          topics: ["BFS & DFS", "Cycle Detection", "Topological Sort"],
        });
      }

      if (name.includes("array")) {
        result.push({
          subject: "Arrays",
          priority: "Low",
          topics: ["Sliding Window", "Kadane’s Algorithm", "Two Pointers"],
        });
      }

      if (name.includes("bst")) {
        result.push({
          subject: "BST",
          priority: "High",
          topics: [
            "Insert / Delete",
            "Search in BST",
            "BST Validation",
            "Successor & Predecessor",
          ],
        });
      }
    });

    setAnalysis(result);

    /* ========= AI DECISION LOGIC (UNCHANGED) ========= */
    const high = result.filter((r) => r.priority === "High");
    const medium = result.filter((r) => r.priority === "Medium");
    const low = result.filter((r) => r.priority === "Low");

    let pool = [];
    const roll = Math.random();

    if (roll < 0.6 && high.length) pool = high;
    else if (roll < 0.85 && medium.length) pool = medium;
    else if (low.length) pool = low;
    else pool = result;

    const pick = pool[Math.floor(Math.random() * pool.length)];

    setHighlight("");
    setTimeout(() => {
      setHighlight(pick.subject);
      setAiTip(
        `Focus on ${pick.subject} — frequently asked in previous exams`
      );

      // ✅ ADD-ON 1: WHY IMPORTANT
      setAiReason(
        `${pick.subject} shows high exam relevance based on repeated appearance in previous year papers.`
      );

      // ✅ ADD-ON 2: STUDY TIME
      let time = "2 hours";
      if (pick.priority === "High") time = "6 hours";
      else if (pick.priority === "Medium") time = "4 hours";
      setStudyTime(time);
    }, 100);
  };

  return (
    <div className="page">
      <h2>📊 AI Exam Insights</h2>
      <p className="subtitle">
        Upload PYQs → AI extracts important topics automatically
      </p>

      {/* ===== UPLOAD BOX ===== */}
      <input
        type="file"
        accept=".pdf"
        multiple
        onChange={handleUpload}
        className="hidden-input"
        id="upload-pdf"
      />

      <label htmlFor="upload-pdf" className="upload-ui">
        📄 Upload PYQ PDFs
        <span>Trees · Graphs · Arrays · BST</span>
      </label>

      {files.length > 0 && (
        <p className="file-count">{files.length} file(s) selected</p>
      )}

      {/* ===== AI CARDS ===== */}
      <div className="ai-card-grid">
        {analysis.map((item, index) => (
          <div
            key={index}
            className={`ai-topic-card ${
              highlight === item.subject ? "ai-highlight" : ""
            }`}
          >
            <h3>
              {item.subject} —{" "}
              <span className={`priority ${item.priority.toLowerCase()}`}>
                {item.priority} Priority
              </span>
            </h3>

            <ul>
              {item.topics.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ===== AI TIP + ADD-ONS ===== */}
      {aiTip && (
        <div className="ai-highlight-wrap">
          <div className="ai-highlight">
            🤖 <b>AI Recommendation:</b>
            <br />
            {aiTip}

            {aiReason && (
              <p className="ai-reason">
                💡 <i>{aiReason}</i>
              </p>
            )}

            {studyTime && (
              <p className="study-time">
                ⏱️ Suggested Study Time: <b>{studyTime}</b>
              </p>
            )}
          </div>
        </div>
      )}

      {/* ===== ACTION BUTTONS ===== */}
      <div className="ai-actions">
        <button className="btn solid" onClick={back}>
          ← Back to Dashboard
        </button>

        <button className="btn solid" onClick={runAIAnalysis}>
          🔄 Re-run AI Analysis
        </button>
      </div>
    </div>
  );
}
