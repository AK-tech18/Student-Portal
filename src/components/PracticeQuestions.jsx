import { useState } from "react";
import "../styles/pages.css";

export default function PracticeQuestions({ goBack }) {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const links = {
  trees: {
    leetcode: "https://leetcode.com/tag/tree/",
    cn: "https://www.codingninjas.com/studio/problems?search=tree",
  },
  graphs: {
    leetcode: "https://leetcode.com/tag/graph/",
    cn: "https://www.codingninjas.com/studio/problems?search=graph",
  },
  arrays: {
    leetcode: "https://leetcode.com/tag/array/",
    cn: "https://www.codingninjas.com/studio/problems?search=array",
  },
};


  const openPlatform = (platform) => {
    window.open(links[selectedTopic][platform], "_blank");
    setSelectedTopic(null);
  };

  return (
    <div className="page">
      <h2>📝 Practice Questions</h2>
      <p className="subtitle">Hand-picked questions to boost exam confidence</p>

      <div className="practice-grid">

        {/* TREES */}
        <div className="practice-card trees">
          <h3>🌳 Trees</h3>
          <ul>
            <li>Tree Traversals</li>
            <li>Height & Diameter</li>
            <li>Lowest Common Ancestor</li>
            <li>Balanced Binary Tree</li>
            <li>BST Operations</li>
          </ul>
          <button
            className="action-btn"
            onClick={() => setSelectedTopic("trees")}
          >
            Practice Now
          </button>
        </div>

        {/* GRAPHS */}
        <div className="practice-card graphs">
          <h3>🕸 Graphs</h3>
          <ul>
            <li>BFS & DFS</li>
            <li>Cycle Detection</li>
            <li>Topological Sort</li>
            <li>Dijkstra</li>
            <li>MST</li>
          </ul>
          <button
            className="action-btn"
            onClick={() => setSelectedTopic("graphs")}
          >
            Practice Now
          </button>
        </div>

        {/* ARRAYS */}
        <div className="practice-card arrays">
          <h3>📦 Arrays</h3>
          <ul>
            <li>Sliding Window</li>
            <li>Kadane's Algorithm</li>
            <li>Two Pointer</li>
            <li>Binary Search</li>
            <li>Merge Intervals</li>
          </ul>
          <button
            className="action-btn"
            onClick={() => setSelectedTopic("arrays")}
          >
            Practice Now
          </button>
        </div>

      </div>

      <button className="back-btn" onClick={goBack}>
        ⬅ Back to Study Material
      </button>

      {/* PLATFORM CHOICE POPUP */}
      {selectedTopic && (
        <div className="platform-popup">
          <div className="popup-card">
            <h3>Choose Platform</h3>

            <button onClick={() => openPlatform("leetcode")}>
              LeetCode
            </button>

            <button onClick={() => openPlatform("cn")}>
              Coding Ninjas
            </button>

            <button
              className="close-btn"
              onClick={() => setSelectedTopic(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
