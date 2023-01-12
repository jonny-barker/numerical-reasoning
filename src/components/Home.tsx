import React from "react";

export function Home() {
  return (
    <div className="home-page">
      <h2>Select Difficulty:</h2>
      <div className="difficulty-selector">
        <button>
          <h2>Beginner</h2>
        </button>
        <button>
          <h2>Intermediate</h2>
        </button>
        <button>
          <h2>Advanced</h2>
        </button>
      </div>
    </div>
  );
}
