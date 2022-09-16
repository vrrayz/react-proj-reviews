import React from "react";
import ReviewCard from "./components/ReviewCard";
function App() {
  return (
    <div className="flex-center-column">
    <div className="container-box">
      <h1>Our Reviews</h1>
      <div className="underline"></div>
      <ReviewCard />
    </div>
  </div>
  );
}

export default App;
