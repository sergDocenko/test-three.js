import { ScrollControls, SoftShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./App.css";
import { Camera } from "./components/Camera/Camera";
import Loader from "./components/Loader/Loader";
import Model from "./components/models/Box/Box";
import Plane from "./components/models/Plane/Plane";

function App() {
  return (
    <div className="App">
      <Canvas shadows>
        <SoftShadows size={15} samples={25} focus={1} />
        <directionalLight
          castShadow
          position={[5, 3, 7]}
          shadow-mapSize={[512, 512]}
          intensity={7}
        />

        <ambientLight intensity={1} />
        <ScrollControls pages={5}>
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
