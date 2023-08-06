import React from "react";

function Plane(props) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.6, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="gray" receiveShadow depthWrite={false} />
    </mesh>
  );
}

export default Plane;
