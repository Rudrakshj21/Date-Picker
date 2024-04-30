import { useState } from "react";
import "./App.css";
export default function App() {
  const [count, setCount] = useState(0);
  const [slide, setSlider] = useState(1);
  let date = new Date();
  date = date.setDate(date.getDate() + count);
  return (
    <div className="main">
      <div className="slider-wrapper" style={{"display" : "flex","flexDirection" : "column","justifyContent" : "center","alignItems":"center"}}>
        <label for="dates">Step</label>
        <input
          type="range"
          name="dates"
          min="0"
          max="10"
          value={slide}
          onChange={(e) => setSlider(+e.target.value)}
        />
        <span>{slide}</span>
      </div>
      <div className="input-wrapper">
        <button onClick={handlePreCount}>-</button>
        <input
          type="text"
          accept="number"
          value={count}
          onChange={(e) => handleCount(e)}
        />
        <button onClick={handleNextCount}>+</button>
      </div>
      <div className="display-date">
        {count} days from today is {new Date(date).toDateString()}
      </div>
      <button
        className={count === 0 ? "reset off" : "reset"}
        onClick={() => {
          setCount(0);
          setSlider(1);
        }}
      >
        Reset
      </button>
    </div>
  );

  function handleCount(e) {
    const count = +e.target.value;
    console.log("count", count);
    if (Object.is(NaN, count)) {
      alert("please input numeric values");
      setCount(0);
      return;
    }
    //  console.log(+e.target.value);
    setCount((c) => count + slide);
  }
  function handlePreCount() {
    setCount((c) => c - slide);
  }
  function handleNextCount() {
    setCount((c) => c + slide);
  }
}
