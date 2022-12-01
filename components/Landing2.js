import Image from "next/image";
import React from "react";
import Button from "./Button";
import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import Model from "./Model3d/Model";


function Landing2() {
  return (
    <section className="min-h-screen mx-auto flex flex-col items-center py-20 lg:flex-row lg:pt-5 xl:pt-10">
      <div className="lg:flex-1 text-center ">
        <h1 className="space-y-3  font-semibold tracking-wide ">
          
          <div className="text-6xl sm:text-7xl xl:text-9xl  flex justify-center  ">
          <div className=" animate-wave bg-[#ec4899] bg-clip-text text-transparent">P</div>
            <div className=" animate-wave2 bg-[#e34aa1] bg-clip-text text-transparent">o</div>
            <div className=" animate-wave3 bg-[#da4ca9] bg-clip-text text-transparent">w</div>
            <div className=" animate-wave4 bg-[#d14eb1] bg-clip-text text-transparent">e</div>
            <div className="animate-wave5 bg-[#c750ba] bg-clip-text text-transparent">r</div>
            <div className="animate-wave6 bg-[#bd52c4] bg-clip-text text-transparent">e</div>
            <div className="animate-wave7 bg-[#a30e9a] bg-clip-text text-transparent">d</div>
          </div>
          <span className="block text-4xl sm:text-5xl xl:text-7xl xl:py-12">By Intellect</span>
          <span className="lg:pb-10 xl:pb-14 block text-3xl sm:text-4xl xl:text-6xl ">Driven By Values</span>
        </h1>

   
        <div className="hidden lg:inline">
        <Button title="Buy Now"/>

       
        </div>
      </div>

      <div className=" h-[350px] w-[350px] ] sm:w-[400px] sm:h-[450px] xl:w-[550px] xl:h-[550px]  flex-1 relative">
        <Image src="/iphone3.png" layout="fill" objectFit="contain" />
      </div>
    </section>
  );
}

export default Landing2;