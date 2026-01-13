import "../styles/pages.css";

export default function PYQ({ goBack }) {

  const pyqLinks = {
    trees: "https://drive.google.com/file/d/1mIVMuj-IXFzWbHZQFUJ3_Ml3cXgXNrK0/view?usp=drive_link",
    graphs: "https://drive.google.com/file/d/1-e4iRGZDjY4SoqTlINF4ehM5EsX8knsn/view?usp=drive_link",
    arrays: "https://drive.google.com/file/d/1fPbmaWuZ49kcDA0cKW7ehXN0d7KP4eK5/view?usp=sharing",
    bst: "https://drive.google.com/file/d/1WRCxJ53y8sUmWuSp8kg8wQRobkilwsHY/view?usp=drive_link",
  };

  return (
    <div className="page">
      <h2>📂 Previous Year Questions (PYQs)</h2>
      <p className="subtitle">Frequently asked exam questions</p>

      <div className="pyq-list">
        <div className="pyq-item">
          <span>🌳 Trees - Traversals & LCA</span>
          <a
            href={pyqLinks.trees}
            target="_blank"
            rel="noopener noreferrer"
          >
            View PDF
          </a>
        </div>

        <div className="pyq-item">
          <span>🕸 Graphs - BFS / DFS / Topological Sort</span>
          <a
            href={pyqLinks.graphs}
            target="_blank"
            rel="noopener noreferrer"
          >
            View PDF
          </a>
        </div>

        <div className="pyq-item">
          <span>📦 Arrays - Sliding Window & Kadane</span>
          <a
            href={pyqLinks.arrays}
            target="_blank"
            rel="noopener noreferrer"
          >
            View PDF
          </a>
        </div>

        <div className="pyq-item">
          <span>🌳 BST - Insert / Delete</span>
          <a
            href={pyqLinks.bst}
            target="_blank"
            rel="noopener noreferrer"
          >
            View PDF
          </a>
        </div>
      </div>

      <div className="ai-banner">
        🤖 AI Tip: PYQs + Practice = Guaranteed Confidence
      </div>

      <button className="back-btn" onClick={goBack}>
        ⬅ Back to Study Material
      </button>
    </div>
  );
}
