import Image from "next/image";
import React from "react";
import Button from "./Button";
import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import Model from "./Model3d/Model";


function Landing() {
  return (
    <section className="min-h-screen mx-auto flex flex-col items-center py-20 lg:flex-row lg:pt-5 xl:pt-10">
      <div className="lg:flex-1 lg:text-center ">
        <h1 className="space-y-3  font-semibold tracking-wide ">
          <span className="text-6xl sm:text-7xl xl:text-9xl block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent ">
            Powered
          </span>
          <span className="block text-4xl sm:text-5xl xl:text-7xl xl:py-12">By Intellect</span>
          <span className="lg:pb-10 xl:pb-14 block text-3xl sm:text-4xl xl:text-6xl ">Driven By Values</span>
        </h1>

   
        <div className="hidden lg:inline">
        <Button title="Buy Now"/>

       
        </div>
      </div>

      <div className="h-[300px] w-[300px] sm:w-[400px] sm:h-[450px] xl:w-[600px] xl:h-[600px] mt-10 mb-14 lg:flex-1">
      <Canvas shadows camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
          <Suspense fallback={null}>
            <Model />
            {/* To add environment effect to the model */}
            <Environment preset="night" />
          </Suspense>
          <OrbitControls autoRotate enableZoom={false}/>
        </Canvas>
        <div className="text-center py-5 lg:hidden">
        <Button title="Buy Now"/>

        </div>
      </div>
    </section>
  );
}

export default Landing;