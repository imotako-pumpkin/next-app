import { OrbitControls, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ReactNode } from 'react'

export type SceneProps = {
  children: ReactNode
  className?: string
}

export const Scene = (props: any) => {
  const { children } = props

  return (
    <Canvas {...props}>
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      {children}
      <Preload all />
      <OrbitControls />
    </Canvas>
  )
}
