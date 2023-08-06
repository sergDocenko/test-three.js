import { useLoader, useGraph } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function Cube() {
  const scene = useLoader(OBJLoader, "Crate1.obj");
  const { nodes, materials } = useGraph(scene);
  console.log(materials
    );
  return <mesh 
  geometry={nodes["Cube_Cube.001"].geometry}
  // material={}
   >
    <meshStandardMaterial color={"red"}/>
   </mesh>
    ;
}
export default Cube;
