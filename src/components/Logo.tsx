import { Line, useCursor } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRouter } from 'next/router'
import { useRef, useState, useMemo } from 'react'
import * as THREE from 'three'

export const Logo = ({ route, ...props }: any) => {
  const router = useRouter()
  const mesh = useRef<THREE.Group>(null)
  const [hovered, hover] = useState(false)
  const points = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
        100,
      ),
    [],
  )

  useCursor(hovered)
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    if (mesh.current) {
      mesh.current.rotation.y = Math.sin(t) * (Math.PI / 8)
      mesh.current.rotation.x = Math.cos(t) * (Math.PI / 8)
      mesh.current.rotation.z -= delta / 4
    }
  })

  return (
    <group ref={mesh} {...props}>
      <Line worldUnits points={points} color="#1fb2f5" lineWidth={0.15} />
      <Line
        worldUnits
        points={points}
        color="#1fb2f5"
        lineWidth={0.15}
        rotation={[0, 0, 1]}
      />
      <Line
        worldUnits
        points={points}
        color="#1fb2f5"
        lineWidth={0.15}
        rotation={[0, 0, -1]}
      />
      <mesh
        onClick={() => router.push(route)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <sphereGeometry args={[0.55, 64, 64]} />
        <meshPhysicalMaterial
          roughness={0}
          color={hovered ? 'hotpink' : '#1fb2f5'}
        />
      </mesh>
    </group>
  )
}
