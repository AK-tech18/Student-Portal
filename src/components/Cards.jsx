export default function Cards({ goStudy, goPlanner, goAI }) {
  return (
    <div className="cards">
      <div className="card" onClick={goStudy}>
        <h3>📚 Study Material</h3>
        <p>Notes, PPTs & PDFs</p>
      </div>

      <div className="card" onClick={goPlanner}>
        <h3>📅 Exam Planner</h3>
        <p>Deadlines & syllabus</p>
      </div>

      <div className="card" onClick={goAI}>
        <h3>📊 AI Exam Insights</h3>
        <p>Most asked topics</p>
      </div>
    </div>
  );
}
