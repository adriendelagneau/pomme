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