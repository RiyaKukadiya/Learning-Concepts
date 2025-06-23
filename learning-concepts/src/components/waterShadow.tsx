// WaterScene.tsx
'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { OrbitControls, Plane, Sky } from '@react-three/drei'
import * as THREE from 'three'

export default function WaterScene() {
  const cameraRef = useRef<any>()
  const [position, setPosition] = useState([0, 2, 5])

  // Arrow key movement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setPosition((prev) => {
        const [x, y, z] = prev
        if (e.key === 'ArrowUp') return [x, y, z - 0.5]
        if (e.key === 'ArrowDown') return [x, y, z + 0.5]
        if (e.key === 'ArrowLeft') return [x - 0.5, y, z]
        if (e.key === 'ArrowRight') return [x + 0.5, y, z]
        return prev
      })
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <Canvas camera={{ position }}>
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />

      {/* Animated Water-like Plane */}
      <WaterPlane />

      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  )
}

function WaterPlane() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.material.displacementScale = 0.2
      ref.current.material.time = clock.getElapsedTime()
    }
  })

  return (
    <Plane
      ref={ref}
      args={[10, 10, 64, 64]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <meshStandardMaterial
        color="#1e90ff"
        wireframe={false}
        side={THREE.DoubleSide}
        displacementScale={0.2}
        roughness={0.4}
      />
    </Plane>
  )
}
