"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float } from "@react-three/drei"

function FloatingGeometry() {
  return (
    <group>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-4, 2, -2]}>
          <icosahedronGeometry args={[0.5]} />
          <meshStandardMaterial color="#00d4ff" wireframe />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[4, -1, -1]}>
          <octahedronGeometry args={[0.7]} />
          <meshStandardMaterial color="#ff6b6b" />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2.5}>
        <mesh position={[2, 3, -3]}>
          <torusGeometry args={[0.4, 0.2, 16, 32]} />
          <meshStandardMaterial color="#4ecdc4" />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={2} floatIntensity={1.8}>
        <mesh position={[-3, -2, -2]}>
          <dodecahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#ffe66d" />
        </mesh>
      </Float>
    </group>
  )
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingGeometry />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}
