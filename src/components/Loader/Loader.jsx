import React, { useEffect } from "react";
import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress, total, active, item } = useProgress();

  return <Html center> 
  <progress value={progress} max={100}></progress>
  {progress} % loaded</Html>;
}

export default Loader;
