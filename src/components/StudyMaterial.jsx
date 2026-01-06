import "../styles/pages.css";

export default function StudyMaterial({ back, goPractice, goPYQ }) {

  return (
    <div className="study-page">
      <div className="study-header">
        <h2>📚 Study Material</h2>
        <p>Subject-wise notes, PPTs & PDFs</p>
      </div>

      <div className="study-grid">
        {/* Data Structures */}
        <div className="study-card premium blue">
          <div className="card-top">
            <h3>📘 Data Structures</h3>
            <span className="badge">PDF</span>
          </div>

          <p>Complete notes for exams & interviews</p>

          <div className="progress-wrap">
            <div className="progress-label">
              Progress <span>62%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "62%" }}></div>
            </div>
          </div>

          <div className="card-actions">
            <button className="btn ghost">View</button>
            <button className="btn solid">Download</button>
          </div>
        </div>

        {/* Operating Systems */}
        <div className="study-card premium purple">
          <div className="card-top">
            <h3>🖥 Operating Systems</h3>
            <span className="badge">PPT</span>
          </div>

          <p>Lecture slides & revision material</p>

          <div className="progress-wrap">
            <div className="progress-label">
              Progress <span>40%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "40%" }}></div>
            </div>
          </div>

          <div className="card-actions">
            <button className="btn ghost">View</button>
            <button className="btn solid">Download</button>
          </div>
        </div>

        {/* DBMS */}
        <div className="study-card premium green">
          <div className="card-top">
            <h3>📑 DBMS</h3>
            <span className="badge">QUESTIONS</span>
          </div>

          <p>Important & repeated exam questions</p>

          <div className="progress-wrap">
            <div className="progress-label">
              Progress <span>80%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className="card-actions">
            <button className="btn ghost">View</button>
            <button className="btn solid">Download</button>
          </div>
        </div>
      </div>
     <div className="study-actions">
  <button onClick={goPractice}>📝 Practice Questions</button>
  <button onClick={goPYQ}>📂 PYQs</button>
</div>

      <button className="back-btn" onClick={back}>
        ← Back to Dashboard
      </button>
    </div>
  );
}
