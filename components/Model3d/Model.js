import React from 'react'
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function Model() {

    // location of the 3D model
  const gltf = useLoader(GLTFLoader, "/iphone/scene.gltf");
  return (
    <>
      {/* Use scale to control the size of the 3D model */}
      <primitive object={gltf.scene} scale={3} />
    </>
  );
}

export default Model