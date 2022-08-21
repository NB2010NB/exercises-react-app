import "./about.css";
import { useEffect, useState } from "react";
function About() {
  const [something, setSomething]= useState("initial start")
  useEffect(() => {
    alert("mount")
  }, [something]);
  return (
    <div className="about">
      <h1>{something}</h1>
<button onClick={()=>setSomething("new start")}>click</button>
    </div>
  );
};

export default About;
