import "../styles/pages.css";

export default function Settings({ back }) {
  return (
    <div className="page settings-page">
      <div className="settings-header">
        <h2>⚙️ Settings</h2>
        <p>Customize your experience</p>
      </div>

      <div className="settings-grid">
        <div className="settings-card">
          <span className="icon">🔔</span>
          <div>
            <h4>Notifications</h4>
            <p>Enabled</p>
          </div>
          <span className="status active">ON</span>
        </div>

        <div className="settings-card">
          <span className="icon">🌗</span>
          <div>
            <h4>Theme</h4>
            <p>Dark Mode</p>
          </div>
          <span className="status">AUTO</span>
        </div>

        <div className="settings-card">
          <span className="icon">👤</span>
          <div>
            <h4>Profile</h4>
            <p>Student</p>
          </div>
          <span className="status">EDIT</span>
        </div>
      </div>

      <button className="back-btn" onClick={back}>
        ⬅ Back to Dashboard
      </button>
    </div>
  );
}
