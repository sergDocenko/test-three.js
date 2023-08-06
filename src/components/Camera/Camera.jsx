import React, { useEffect, useRef, useMemo } from "react";
import { PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const LINE_NB_POINTS = 4000;

export const Camera = (props) => {
  
  const cameraRef = useRef(null);
  const scroll = useScroll();

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(1, 3, 11),
        new THREE.Vector3(0, 2, 9),
        new THREE.Vector3(-1, 1, 7),
        new THREE.Vector3(-2, 1, 5),
        new THREE.Vector3(1, 1, 3),
        new THREE.Vector3(2, 1, 0),
      ],
      false,
      "catmullrom"
    );
  }, []);

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS);
  }, [curve]);

  useFrame(() => {
    const curPointIndex = Math.min(
      Math.round(scroll.offset * linePoints.length),
      linePoints.length - 1
    );
    const curPoint = linePoints[curPointIndex];
    cameraRef.current.position.z = curPoint.z;
    cameraRef.current.position.x = curPoint.x;
    cameraRef.current.position.y = curPoint.y;    
  });

  return <PerspectiveCamera makeDefault ref={cameraRef} fov={80} />;
};
