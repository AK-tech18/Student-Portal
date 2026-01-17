import { useState } from "react";
import "../styles/pages.css";

export default function StudyMaterial({ back, goPractice, goPYQ }) {
  const [popup, setPopup] = useState(null);
  // popup = { subject: "dsa" | "se" | "dbms", action: "view" | "download" }

  const materials = {
    dsa: {
      notes: "https://drive.google.com/drive/folders/1QGD-LcFZWFr04qsDGAEgfwX7VaAZS_gw",
      lectures:
        "https://drive.google.com/drive/folders/1rTtDc0MnVmCLf6IWuOfhAhTwbOa6A9dH",
    },
    se: {
      notes:
        "https://drive.google.com/drive/folders/1CSt5cSfNclwkq44dMuk2D03WMUzUiZC7",
      lectures:
        "https://drive.google.com/drive/folders/1rBCahTNRNpyol4YBug_zQjRtXAdJZT8_",
    },
    dbms: {
      notes:
        "https://drive.google.com/drive/folders/1qSaVGQ-4sm_0pESDRKccukb9imzSZo8H",
      lectures:
        "https://drive.google.com/drive/folders/1VY9miEEBk6keyxZ-pM3HEwwEsZ5gFX9-",
    },
  };

  const openMaterial = (type) => {
    const link = materials[popup.subject][type];
    window.open(link, "_blank");
    setPopup(null);
  };

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

          <p>Complete notes for exams & Lecture Slides</p>

          <div className="progress-wrap">
            <div className="progress-label">
              Progress <span>62%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "62%" }}></div>
            </div>
          </div>

          <div className="card-actions">
            <button
              className="btn ghost"
              onClick={() => setPopup({ subject: "dsa", action: "view" })}
            >
              View
            </button>
            <button
              className="btn solid"
              onClick={() => setPopup({ subject: "dsa", action: "download" })}
            >
              Download
            </button>
          </div>
        </div>

        {/* Software Engineering */}
        <div className="study-card premium purple">
          <div className="card-top">
            <h3>🖥 Software Engineering</h3>
            <span className="badge">PPT</span>
          </div>

          <p>Complete notes for exams & Lecture Slides</p>

          <div className="progress-wrap">
            <div className="progress-label">
              Progress <span>40%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "40%" }}></div>
            </div>
          </div>

          <div className="card-actions">
            <button
              className="btn ghost"
              onClick={() => setPopup({ subject: "se", action: "view" })}
            >
              View
            </button>
            <button
              className="btn solid"
              onClick={() => setPopup({ subject: "se", action: "download" })}
            >
              Download
            </button>
          </div>
        </div>

        {/* DBMS */}
        <div className="study-card premium green">
          <div className="card-top">
            <h3>📑 DBMS</h3>
            <span className="badge">QUESTIONS</span>
          </div>

          <p>Complete notes for exams & Lecture Slides</p>

          <div className="progress-wrap">
            <div className="progress-label">
              Progress <span>80%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className="card-actions">
            <button
              className="btn ghost"
              onClick={() => setPopup({ subject: "dbms", action: "view" })}
            >
              View
            </button>
            <button
              className="btn solid"
              onClick={() => setPopup({ subject: "dbms", action: "download" })}
            >
              Download
            </button>
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

      {/* POPUP: Notes / Lectures */}
      {popup && (
        <div className="platform-popup">
          <div className="popup-card">
            <h3>Select Material</h3>

            <button onClick={() => openMaterial("notes")}>Notes</button>
            <button onClick={() => openMaterial("lectures")}>
              Lecture Slides
            </button>

            <button
              className="close-btn"
              onClick={() => setPopup(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
