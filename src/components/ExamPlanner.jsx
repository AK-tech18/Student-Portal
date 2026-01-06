import "../styles/pages.css";

export default function ExamPlanner({ back }) {
  return (
    <div className="page exam-page">
      <h2>📅 Exam Planner</h2>
      <p className="subtitle">Upcoming exams & deadlines</p>

      <div className="exam-list">
        <div className="exam-card">
          <span>📘 Data Structures</span>
          <span>10 Jan</span>
        </div>

        <div className="exam-card">
          <span>🖥 Operating Systems</span>
          <span>14 Jan</span>
        </div>

        <div className="exam-card urgent">
          <span>📑 DBMS Assignment</span>
          <span>8 Jan</span>
        </div>
      </div>

      <div className="ai-tip">
        🤖 <b>AI Tip:</b> Start Data Structures revision today
      </div>

      <button className="back-btn" onClick={back}>
        ⬅ Back to Dashboard
      </button>
    </div>
  );
}

