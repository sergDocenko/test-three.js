import { Clone } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const points = [
  new THREE.Vector3(-1, 0, 0),
  new THREE.Vector3(-1, 2, 0),
  new THREE.Vector3(1, 2, 0),
  new THREE.Vector3(1, 0, 0),
  new THREE.Vector3(-1, 0, 0),
];
const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

const Model = (props) => {
  const { position } = props;
  const model = useRef(null);
  const lineRef = useRef(null);

  const materials = useLoader(MTLLoader, "./models/Crate/Crate1.mtl");
  const obj = useLoader(OBJLoader, "./models/Crate/Crate1.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  useFrame((state) => {
    if (
      Math.abs(state.camera.position.x - position[0]) < 1 &&
      Math.abs(state.camera.position.z - position[2]) < 5.5
    ) {
      lineRef.current.visible = true;
    } else {
      lineRef.current.visible = false;
    }
  });
  return (
    <>
      <group position={position}>
        <line geometry={lineGeometry} position={[0, -1, 1]} ref={lineRef}>
          <lineBasicMaterial
            attach="material"
            color={"red"}                      
          />
        </line>
        <Clone object={obj} scale={0.6} castShadow ref={model} />
      </group>
    </>
  );
};

export default Model;
