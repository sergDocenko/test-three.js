import { Clone } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { controlPointsFrame } from "./config";
import { getVectors3FromListPosition } from "../../utils";

const Box = (props) => {
  const { position } = props;

  const model = useRef(null);
  const frameRef = useRef(null);
  const materials = useLoader(MTLLoader, "./models/Crate/Crate1.mtl");
  const obj = useLoader(OBJLoader, "./models/Crate/Crate1.obj", (loader) => {
    loader.setMaterials(materials);
  });
  const frameControlPoints = useMemo(() => {
    return getVectors3FromListPosition(controlPointsFrame);
  }, []);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(
    frameControlPoints
  );
  useFrame((state) => {
    if (
      Math.abs(state.camera.position.x - position[0]) < 1 &&
      Math.abs(state.camera.position.z - position[2]) < 5.5
    ) {
      frameRef.current.visible = true;
    } else {
      frameRef.current.visible = false;
    }
  });
  return (
    <>
      <group position={position}>
        <line geometry={lineGeometry} position={[0, -1, 1]} ref={frameRef}>
          <lineBasicMaterial attach="material" color={"red"} />
        </line>
        <Clone object={obj} scale={0.6} castShadow ref={model} />
      </group>
    </>
  );
};

export default Box;
