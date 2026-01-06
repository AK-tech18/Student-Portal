import "../styles/pages.css";

export default function PYQ({ goBack }) {
  return (
    <div className="page">
      <h2>📂 Previous Year Questions (PYQs)</h2>
      <p className="subtitle">Frequently asked exam questions</p>

      <div className="pyq-list">
        <div className="pyq-item">
          <span>🌳 Trees - Traversals & LCA</span>
          <a href="#">View PDF</a>
        </div>

        <div className="pyq-item">
          <span>🕸 Graphs - BFS / DFS / Topological Sort</span>
          <a href="#">View PDF</a>
        </div>

        <div className="pyq-item">
          <span>📦 Arrays - Sliding Window & Kadane</span>
          <a href="#">View PDF</a>
        </div>

        <div className="pyq-item">
          <span>🌳 BST - Insert / Delete</span>
          <a href="#">View PDF</a>
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
