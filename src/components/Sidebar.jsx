export default function Sidebar({ goStudy, goPlanner, goAI, goSettings }) {
  return (
    <div className="sidebar">
      <h2>Smart Helper</h2>
      <div className="menu">
        <a className="active">🏠 Dashboard</a>
        <a onClick={goStudy}>📚 Study Material</a>
        <a onClick={goPlanner}>📅 Exam Planner</a>
        <a onClick={goAI}>📊 AI Insights</a>
        <a onClick={goSettings}>⚙️ Settings</a>
      </div>
    </div>
  );
}
  