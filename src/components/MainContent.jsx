import Topbar from "./Topbar";
import Cards from "./Cards";

export default function MainContent({ goStudy, goPlanner, goAI }) {
  return (
    <div className="main">
      <Topbar />

      {/* TOP CARDS */}
      <Cards
        goStudy={goStudy}
        goPlanner={goPlanner}
        goAI={goAI}
      />

      {/* MOTIVATION */}
      <div className="motivation">
        “Small progress every day leads to big results.”
      </div>

      {/* TODAY FOCUS */}
      <div className="focus-card">
        <h3>🎯 Today's Focus</h3>
        <ul>
          <li>📘 Revise: <b>Trees</b></li>
          <li>📝 Practice: <b>2 PYQs</b></li>
          <li>⏳ Time Needed: <b>1.5 hrs</b></li>
        </ul>
      </div>

      {/* PROGRESS BOXES */}
      <div className="progress">
        <div className="progress-box">
          <span>📊</span>
          <h4>62%</h4>
          <p>Syllabus Covered</p>
        </div>

        <div className="progress-box">
          <span>⏰</span>
          <h4>5</h4>
          <p>Days Left</p>
        </div>

        <div className="progress-box">
          <span>🧠</span>
          <h4>High</h4>
          <p>Confidence</p>
        </div>
      </div>

      {/* ALERTS */}
      <div className="alerts">
        <h3>🔔 Smart Alerts</h3>
        <ul>
          <li>Data Structures exam in 5 days</li>
          <li>OS notes not opened in 3 days</li>
        </ul>
      </div>

      {/* CONTINUE LEARNING */}
      <div className="section">
        <h3>Continue Learning</h3>
        <div className="info">
          <p>📘 Upcoming Exam: <b>Data Structures</b></p>
          <p>⏰ Exam in <b>5 days</b></p>
          <p>🧠 AI Tip: Focus on <b>Trees & Graphs</b></p>
        </div>
      </div>
    </div>
  );
}
