import "../styles/pages.css";

export default function PracticeQuestions({ goBack }) {
  return (
    <div className="page">
      <h2>📝 Practice Questions</h2>
      <p className="subtitle">Hand-picked questions to boost exam confidence</p>

      <div className="practice-grid">
        <div className="practice-card trees">
          <h3>🌳 Trees</h3>
          <ul>
            <li>Tree Traversals</li>
            <li>Height & Diameter</li>
            <li>Lowest Common Ancestor</li>
            <li>Balanced Binary Tree</li>
            <li>BST Operations</li>
          </ul>
          <button className="action-btn">Practice Now</button>
        </div>

        <div className="practice-card graphs">
          <h3>🕸 Graphs</h3>
          <ul>
            <li>BFS & DFS</li>
            <li>Cycle Detection</li>
            <li>Topological Sort</li>
            <li>Dijkstra</li>
            <li>MST</li>
          </ul>
          <button className="action-btn">Practice Now</button>
        </div>

        <div className="practice-card arrays">
          <h3>📦 Arrays</h3>
          <ul>
            <li>Sliding Window</li>
            <li>Kadane's Algorithm</li>
            <li>Two Pointer</li>
            <li>Binary Search</li>
            <li>Merge Intervals</li>
          </ul>
          <button className="action-btn">Practice Now</button>
        </div>
      </div>

      <button className="back-btn" onClick={goBack}>
        ⬅ Back to Study Material
      </button>
    </div>
  );
}
