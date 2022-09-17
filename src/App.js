import React, { useEffect, useState } from "react";
import ReviewCard from "./components/ReviewCard";
import { data } from "./data";
const App = () => {
  const [index, setIndex] = useState(0);
  const [review, setReview] = useState(data[0]);
  const increaseIndex = () => {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex((prevIndex) => {
        return prevIndex + 1
      });
    }
  };
  
  const decreaseIndex = () => {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex((prevIndex) => {
        return prevIndex - 1
      });
    }
  };
  const randomIndex = () => {
    let randIndex = Math.floor(Math.random() * data.length)
    while (randIndex === index) {
      randIndex = Math.floor(Math.random() * data.length)
    }
    console.log(randIndex)
    setIndex(randIndex)
  }
  useEffect(() => {
    setReview(data[index]);
  },[index])
  return (
    <div className="flex-center-column">
      <div className="container-box">
        <h1>Our Reviews</h1>
        <div className="underline"></div>
        <ReviewCard review={review}>
          <div className="d-flex content-center">
            <button className="caret-btn" onClick={decreaseIndex}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
              </svg>
            </button>
            <button className="caret-btn" onClick={increaseIndex}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
              </svg>
            </button>
          </div>
          <button className="btn mb-3" onClick={randomIndex}>Suprise Me</button>
        </ReviewCard>
      </div>
    </div>
  );
}

export default App;
