import React from "react";

const HeavyComponent: React.FC = () => {
  return (
    <div>
      <h2>This is a heavy component loaded on demand</h2>
      <p>It contains heavy content that is loaded lazily on a button click.</p>
    </div>
  );
};

export default HeavyComponent;
