"use client";
import { Canvas } from "@react-three/fiber";

function Scene() {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[3, 5, 4]} />
      <mesh rotation={[0.2, 0.4, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}

export default function ZenversePage() {
  return (
    <main className="zenverse">
      <div className="zenverse-copy">
        <p className="eyebrow">ZENVERSE</p>
        <h1>Step inside the store.</h1>
        <p>Explore Zenvia in an interactive 3D space.</p>
      </div>
      <div className="zenverse-canvas">
        <Canvas camera={{ position: [4, 3, 5] }}>
          <Scene />
        </Canvas>
      </div>
    </main>
  );
}
