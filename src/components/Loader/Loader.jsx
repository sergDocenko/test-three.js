import { Html, useProgress } from "@react-three/drei";
import React from "react";

function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <progress value={0} max={100}></progress>
      {progress} % loaded
    </Html>
  );
}

export default Loader;
