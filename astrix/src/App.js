import React, { useRef } from "react";
import "./App.css";
import Slideone from "./Slideone";
import Slidetwo from "./Slidetwo";

function App() {
  const slideTwoRef = useRef(null);

  const handleSlideOneClick = () => {
    slideTwoRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      {/* first component handling click will make the autoscroll to 2nd component.. */}
      <Slideone handleClick={handleSlideOneClick} />
      <div ref={slideTwoRef}>
        {/* second component */}
        <Slidetwo />
      </div>
    </div>
  );
}

export default App;
