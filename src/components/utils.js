import * as THREE from "three";
export function getVectors3FromListPosition(listPosition) {
  return listPosition.map(
    (position) => new THREE.Vector3(position.x, position.y, position.z)
  );
}
