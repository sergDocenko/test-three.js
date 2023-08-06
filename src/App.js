import { Suspense, useRef, useState } from "react";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import Loader from "./components/Loader/Loader";
import Model from "./components/models/Box/Box";
import {
  OrbitControls,
  SoftShadows,
  PerspectiveCamera,
  useScroll,
  ScrollControls,
} from "@react-three/drei";
import Plane from "./components/models/Plane/Plane";
import { Physics, useBox } from "@react-three/cannon";
import Cube from "./components/models/Cube/Cube";
import { Camera } from "./components/Camera/Camera";

function App() {
  return (
    <div className="App">
      <Canvas shadows>
        <SoftShadows size={15} samples={25} focus={1} />

        <directionalLight
          castShadow
          position={[3, 4, 5]}
          shadow-mapSize={[512, 512]}
          intensity={7}
        />

        <ambientLight intensity={1} />
        <ScrollControls pages={6}>
          {/* <OrbitControls target={[0, 1, 0]} maxPolarAngle={1.3} /> */}
          {/* <PerspectiveCamera makeDefault fov={70} position={[1, 3, 9]} /> */}
          <Camera />
         
          <Suspense fallback={<Loader />}>
            <Model position={[2, 0, -4]} />
            <Model position={[-2, 0, 1]} />

         
          </Suspense>
        </ScrollControls>
        
        <Plane />
      
      </Canvas>
    </div>
  );
}

export default App;
