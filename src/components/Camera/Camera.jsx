import { PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { CURVE_LINE_AMOUNT_POINTS, controlPointsCamera } from "./config";
import { getVectors3FromListPosition } from "../utils";

export const Camera = (props) => {
  const cameraRef = useRef(null);
  const scroll = useScroll();

  const cameraControlPoints = useMemo(() => {
    return getVectors3FromListPosition(controlPointsCamera);
  }, []);

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(cameraControlPoints, false, "catmullrom");
  }, [cameraControlPoints]);

  const linePoints = useMemo(() => {
    return curve.getPoints(CURVE_LINE_AMOUNT_POINTS);
  }, [curve]);

  useFrame(() => {
    const curvePointIndex = Math.min(
      Math.round(scroll.offset * linePoints.length),
      linePoints.length - 1
    );

    const curvePoint = linePoints[curvePointIndex];
    cameraRef.current.position.z = curvePoint.z;
    cameraRef.current.position.x = curvePoint.x;
    cameraRef.current.position.y = curvePoint.y;
  });

  return <PerspectiveCamera makeDefault ref={cameraRef} fov={80} />;
};
