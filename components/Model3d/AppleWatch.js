import React from 'react'
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function AppleWatch() {

    // location of the 3D model
  const gltf = useLoader(GLTFLoader, "/apple_watch_series_5/scene.gltf");
  return (
    <>
      {/* Use scale to control the size of the 3D model */}
      <primitive object={gltf.scene} scale={9} />
    </>
  );
}

export default AppleWatch